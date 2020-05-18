import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {faUser, faDownload, faHome, faImage, faTimes, faTrash} from '@fortawesome/free-solid-svg-icons';
import {RestService} from '../../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ShareService} from '../../../share.service';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.css']
})
export class SingleFormComponent implements OnInit {
  faUser = faUser;
  form = new FormGroup({});
  model = {};
  public title = '';
  public id: any;
  public target: any;
  fields: FormlyFieldConfig[] = [];
  public loading = false;
  private retrieved: any = null;

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
      this.target = params.target;
      this.load();
    });
  }


  onSubmit() {
    const method = (this.retrieved) ? 'put' : 'post';
    this.rest[method](`retrieved${(method === 'put') ? `/${this.retrieved.id}` : ''}`, {
      values: this.model,
      forms_id: this.id,
      target_id: this.target,
    }).subscribe(res => {
      window.history.back();
    }, error => {
    });
  }

  load = () => {
    this.loading = true;
    this.rest.get(`forms/${this.id}/edit?target=${this.target}`)
      .subscribe(res => {
        const {title, scheme, retrieved} = res.data;
        if (retrieved) {
          this.parseSelect(scheme, Object.entries(retrieved.values));
        }

        this.title = title;
        this.fields = scheme;
        this.model = (retrieved) ? retrieved.values : {};
        this.retrieved = retrieved;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  };

  parseSelect = (data: any, inside: any) => {
    const forms = data.filter(p => p.type === 'select');
    inside.forEach((value, key, map) => {
      const parentKey = value.find(l => true);
      const parentValue = value.reverse().find(l => true);
      data.forEach(o => {
        if (o.type === 'select' && o.key === parentKey) {
          o.templateOptions.options.forEach(h => {
            if (h.value === parentValue) {
              console.log(parentKey, parentValue);
              h.select = 'true';
            }
          });
        }
      });


    });
  };

}
