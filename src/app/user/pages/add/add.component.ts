import {Component, OnInit} from '@angular/core';
import {faCamera, faDownload, faHome, faImage, faTimes, faTrash, faUser} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FPickerAdapter} from '../../../FPickerAdapter';
import {RestService} from '../../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ShareService} from '../../../share.service';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  faUser = faUser;
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
  public zones = [
    {
      name: 'Madrid',
      value: 'madrid'
    },
    {
      name: 'Barcelona',
      value: 'barcelona'
    }
  ];
  public levels = [
    {
      name: 'Admin',
      value: 'admin',
      select: false
    },
    {
      name: 'Manager',
      value: 'manager',
      select: false
    },
    {
      name: 'User',
      value: 'user',
      select: false
    }
  ];

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
      this.parseUser();
    });

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      level: ['', Validators.required],
      zone: ['', Validators.required],
      extra: [''],
      images: [''],
      avatar: [''],
    });
  }

  onSubmit = () => {
    this.loading = true;
    this.form.patchValue({
      extra: this.itemsAsObjects,
      images: this.images
    });
    this.rest[(this.id) ? 'put' : 'post'](`users${(this.id) ? `/${this.id}` : ''}`,
      this.form.value)
      .subscribe(res => {
        this.loading = false;
        this.modalLink(res);
        this.router.navigate(['/', 'user']);
      }, error => {
        this.loading = false;
      });
  };

  modalLink = (res: any) => {
    try {
      const linkRaw = res.data.link.split('?');
      let link = `${window.location.origin}/#/auth/confirmed/${res.data.id}?`;
      link = `${link}${linkRaw.reverse().find(a => true)}`;
      const html = `<input class="form-control"  readonly value="${link}">`;
      this.shared.alertHtml('Compartir', html);
    } catch (e) {
      return null;
    }
  };

  parseUser = () => {
    try {
      this.lvl = JSON.parse(this.cookie.get('user')).level;
    } catch (e) {
      return null;
    }
  };

  load = (report = false) => {
    this.rest.get(`users/${this.id}${(report) ? '?export=pdf' : ''}`).subscribe(res => {
      this.itemsAsObjects = this.shared.wrapperDataExtra(res.data);
      this.images = res.data.images;
      this.form.patchValue(res.data);
    }, error => {
    });
  };

  trash = () => {
    this.shared.confirm('¿Seguro?', '', 'OK').then(
      res => {
        this.rest.delete(`users/${this.id}`)
          .subscribe(() => this.router.navigate(['/', 'user']),
            error => {
            });
      }
    );
  };

  report = () => {
    this.shared.confirm('Reporte', '', 'OK').then(
      res => {
        this.rest.get(`users/${this.id}?export=pdf`).subscribe(res => {
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
