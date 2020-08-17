import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RestService} from '../../../rest.service';
import {AuthGService} from '../../../auth-g.service';
import {Router} from '@angular/router';
import {ShareService} from '../../../share.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private rest: RestService,
              private shared: ShareService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

  }

  onSubmit = () => this.sendReset();

  sendReset = () => {
    this.rest.post(`auth/forget`, this.form.value)
      .subscribe(res => {
        this.shared.alert('Email enviado', '');
        this.form.reset();
      });
  };

}
