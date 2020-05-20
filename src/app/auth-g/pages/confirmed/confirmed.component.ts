import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RestService} from '../../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ShareService} from '../../../share.service';
import {HttpClient} from '@angular/common/http';
import {BsModalService} from 'ngx-bootstrap/modal';
import {CookieService} from 'ngx-cookie-service';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.css']
})
export class ConfirmedComponent implements OnInit {
  public id: any;
  public query: any;
  public form: FormGroup;
  faUser = faUser;
  public data: any;

  constructor(private formBuilder: FormBuilder,
              private rest: RestService,
              private router: Router,
              private shared: ShareService,
              private http: HttpClient,
              private modalService: BsModalService,
              private cookie: CookieService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.token;
      console.log(params);
    });

    this.route.queryParams.subscribe(params => {
      // const userId = params['userId'];
      // console.log(userId);
      this.query = params;
    });
    this.load();
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      password_confirmation: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
      ]],
    });
  }

  onSubmit = () => {
    const body = {
      ...this.form.value, ...this.query
    };
    this.rest.put(`auth/confirmed`,
      body)
      .subscribe(res => {
        this.router.navigate(['/', 'auth', 'logout']);
      });
    console.log(this.form.value);
  };

  load = () => {
    this.rest.get(`auth/confirmed/${this.id}${this.shared.parseQuery(this.query)}`)
      .subscribe(res => {
        this.data = res;
        this.cookie.set(
          'session',
          res.access_token,
          environment.daysTokenExpire,
          '/');
        this.cookie.set(
          'user',
          JSON.stringify(res.user),
          environment.daysTokenExpire,
          '/');
      }, error => {
      });
  };


}
