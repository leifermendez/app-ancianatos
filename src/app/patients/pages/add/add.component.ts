import {Component, OnInit} from '@angular/core';
import {FPickerAdapter} from '../../../FPickerAdapter';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RestService} from '../../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ShareService} from '../../../share.service';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {faCamera, faDownload, faHome, faImage, faTimes, faTrash, faUserShield} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  faUserShield = faUserShield;
  faHome = faHome;
  faDownload = faDownload;
  faTrash = faTrash;
  faCamera = faCamera;
  faImage = faImage;
  faTimes = faTimes;
  public lvl: any;
  public loading = false;
  public itemsAsObjects: any;
  public id: any = false;
  public images = [];
  adapter = new FPickerAdapter(this.http, this.cookie);
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private rest: RestService,
              private router: Router,
              private shared: ShareService,
              private http: HttpClient,
              private cookie: CookieService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.load();
    });

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      extra: [''],
      description: [''],
      emergency_name: ['', Validators.required],
      emergency_last_name: ['', Validators.required],
      emergency_phone: ['', Validators.required],
      images: ['']
    });
  }

  onSubmit = () => {
    this.loading = true;
    this.form.patchValue({
      extra: this.itemsAsObjects,
      images: this.images
    });
    this.rest[(this.id) ? 'put' : 'post'](`patients${(this.id) ? `/${this.id}` : ''}`,
      this.form.value)
      .subscribe(res => {
        this.loading = false;
        this.router.navigate(['/', 'patients']);
      }, error => {
        this.loading = false;
      });
  };


  load = (report = false) => {
    this.rest.get(`patients/${this.id}${(report) ? '?export=pdf' : ''}`).subscribe(res => {
      this.itemsAsObjects = this.shared.wrapperDataExtra(res.data);
      this.images = res.data.images;
      this.form.patchValue(res.data);
    }, error => {
    });
  };

  trash = () => {
    this.shared.confirm('¿Seguro?', '', 'OK').then(
      res => {
        this.rest.delete(`patients/${this.id}`)
          .subscribe(() => this.router.navigate(['/', 'patients']),
            error => {
            });
      }
    );
  };

  report = () => {
    this.shared.confirm('Reporte', '', 'OK').then(
      res => {
        this.rest.get(`patients/${this.id}?export=pdf`).subscribe(res => {
          window.open(res.data.url);
        }, error => {
        });
      }
    );
  };

  addImage = (data) => {
    this.loading = true;
    this.shared.toBase64(data.file).then(res => {
      this.images.push({
        name: data.fileName,
        src: res,
        loading: true
      });
    });
  };

  uploadImage = (data) => {
    this.loading = false;
    this.images.forEach(a => {
      if (data.fileName === a.name) {
        a.online = JSON.parse(data.fileId);
        a.loading = false;
        a.id = a.online.id;
      }
    });
  };

  uploadImageFail = (data) => {
    this.loading = false;
  };

  removeImage = (img) => {
    this.images = this.images.filter(a => a.id !== img.id);
  };
}
