import {Component, OnInit} from '@angular/core';
import {faCamera, faDownload, faHome, faImage, faTimes, faTrash, faUser} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FPickerAdapter} from '../../../FPickerAdapter';
import {RestService} from '../../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ShareService} from '../../../share.service';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {AuthGService} from '../../../auth-g.service';

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
      name: 'Castellanos',
      value: 'castellanos'
    },
    {
      name: 'Amenábar',
      value: 'amenábar'
    },
    {
      name: 'Cafferata',
      value: 'cafferata'
    },
    {
      name: 'Cañada del Ucle',
      value: 'cañada del ucle'
    },
    {
      name: 'Carmen',
      value: 'carmen'
    },
    {
      name: 'Carreras',
      value: 'carreras'
    },
    {
      name: 'Chapuy',
      value: 'chapuy'
    },
    {
      name: 'Chovet',
      value: 'chovet'
    },
    {
      name: 'Christophersen',
      value: 'christophersen'
    },
    {
      name: 'Diego de Alvear',
      value: 'diego de alvear'
    },
    {
      name: 'Elortondo',
      value: 'elortondo'
    },
    {
      name: 'Firmat',
      value: 'firmat'
    },
    {
      name: 'Hughes',
      value: 'hughes'
    },
    {
      name: 'Labordeboy',
      value: 'labordeboy'
    },
    {
      name: 'La Chispa',
      value: 'la chispa'
    },
    {
      name: 'Lazzarino',
      value: 'lazzarino'
    },
    {
      name: 'Maggiolo',
      value: 'maggiolo'
    },
    {
      name: 'María Teresa',
      value: 'maría teresa'
    },
    {
      name: 'Melincué',
      value: 'melincué'
    },
    {
      name: 'Miguel Torres',
      value: 'miguel torres'
    },
    {
      name: 'Murphy',
      value: 'murphy'
    },
    {
      name: 'Rufino',
      value: 'rufino'
    },
    {
      name: 'Sancti Spiritu',
      value: 'sancti spiritu'
    },
    {
      name: 'San Eduardo',
      value: 'san eduardo'
    },
    {
      name: 'San Francisco de Santa Fe',
      value: 'san francisco de santa fe'
    },
    {
      name: 'San Gregorio',
      value: 'san gregorio'
    },
    {
      name: 'Santa Isabel',
      value: 'santa isabel'
    },
    {
      name: 'Teodelina',
      value: 'teodelina'
    },
    {
      name: 'Venado Tuerto',
      value: 'venado tuerto'
    },
    {
      name: 'Villa Cañás',
      value: 'villa cañás'
    },
    {
      name: 'Wheelwright',
      value: 'wheelwright'
    }
  ];
  public levels = [
    {
      name: 'Administrador general',
      value: 'admin',
      select: false
    },
    {
      name: 'Encargado',
      value: 'manager',
      select: false
    },
    {
      name: 'Usuario',
      value: 'user',
      select: false
    }
  ];

  constructor(private formBuilder: FormBuilder,
              private rest: RestService,
              private router: Router,
              public shared: ShareService,
              private http: HttpClient,
              private cookie: CookieService,
              private auth: AuthGService,
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
    const user = this.auth.getUser();
    if (user && user.zone) {
      this.form.patchValue({
        zone: user.zone
      });
    }
    this.form.patchValue({
      level: 'manager'
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
