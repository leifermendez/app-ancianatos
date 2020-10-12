import {Component, OnInit, TemplateRef} from '@angular/core';
import {FPickerAdapter} from '../../../FPickerAdapter';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RestService} from '../../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ShareService} from '../../../share.service';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {faCamera, faDownload, faHome, faImage, faTimes, faTrash, faUserShield} from '@fortawesome/free-solid-svg-icons';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ModalPhotoComponent} from '../../../components/modal-photo/modal-photo.component';
import {WebCamComponent} from '../../../components/web-cam/web-cam.component';
import {environment} from '../../../../environments/environment';
import {AuthGService} from '../../../auth-g.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  modalRef: BsModalRef;
  faUserShield = faUserShield;
  faHome = faHome;
  faDownload = faDownload;
  faTrash = faTrash;
  faCamera = faCamera;
  faImage = faImage;
  faTimes = faTimes;
  public lvl: any;
  public mobile = false;
  public loading = false;
  public itemsAsObjects: any;
  public id: any = false;
  public images = [];
  public institutions: any;
  adapter = new FPickerAdapter(this.http, this.cookie);
  public form: FormGroup;
  public cameraMobile: any = {};

  constructor(private formBuilder: FormBuilder,
              private rest: RestService,
              private router: Router,
              private shared: ShareService,
              private http: HttpClient,
              private modalService: BsModalService,
              private cookie: CookieService,
              private auth: AuthGService,
              private route: ActivatedRoute) {
    this.shared.loadingEmit.subscribe(l => this.loading = l);
    this.shared.camImage.subscribe(res => {
      console.log('Subscriber', res);
      this.images.push({
        ...{
          name: 'image',
          loading: false,
          base: (res && res.type && (res.type === 'base')) ? res.base : null,
        }, ...res.data
      });

      console.log(this.images);
    });
  }

  ngOnInit() {
    this.mobile = environment.mobile;
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.load();
      this.loadInstitutions();
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
      institutions_id: ['', Validators.required],
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


  // openModal(template: TemplateRef<any>, data: any) {
  //   this.modalRef = this.modalService.show(template,
  //     Object.assign({}, {class: 'photo-viewer'}));
  //   this.modalRef.content.closeBtnName = 'Close';
  // }


  openModal(data) {
    const initialState = {
      data
    };
    this.modalRef = this.modalService.show(
      ModalPhotoComponent,
      Object.assign({initialState}, {
        class: 'photo-viewer'
      })
    );
  }

  openCam(data: any = {}) {
    const initialState = {
      data
    };
    this.modalRef = this.modalService.show(
      WebCamComponent,
      Object.assign({initialState}, {
        class: 'photo-viewer'
      })
    );
  }


  loadInstitutions = () => {
    const myHomeId = this.auth.getUser();
    this.rest.get(`institutions?limit=10000&filters=id,=,${myHomeId.institutions_id}`)
      .subscribe(res => {
        this.institutions = res.data.data;
      }, error => {
      });
  };

  openNativeCam = () => {
    this.shared.takePicture()
      .then((img: any) => {
        this.shared.uploadImage(img.origin, img.base);
      })
      .catch(e => console.log('E:', e));
  };
}
