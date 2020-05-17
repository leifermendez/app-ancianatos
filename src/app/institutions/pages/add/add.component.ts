import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {RestService} from '../../../rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public form: FormGroup;
  faHome = faHome;
  public loading = false;
  public itemsAsObjects = [];

  constructor(private formBuilder: FormBuilder,
              private rest: RestService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      description: [''],
      extra: ['']
    });
  }

  onSubmit = () => {
    this.loading = true;
    this.form.patchValue({extra: this.itemsAsObjects});
    this.rest.post(`institutions`,
      this.form.value)
      .subscribe(res => {
        this.loading = false;
        this.router.navigate(['/', 'institutions']);
      }, error => {
        this.loading = false;
      });
  };

}
