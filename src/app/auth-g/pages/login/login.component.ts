import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RestService} from '../../../rest.service';
import {AuthGService} from '../../../auth-g.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private rest: RestService,
              private auth: AuthGService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit = () => {
    this.auth.login(this.form.value).then(res => {
      this.router.navigate(['/']).then();
    });
  };
}
