import {Component, OnInit} from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  faUser = faUser;
  public form: FormGroup;
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

  public itemsAsObjects = [{value: 0, display: 'Angular'}, {value: 1, display: 'React'}];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      level: ['', Validators.required],
      extra: [''],
      avatar: [''],
    });
  }

  onSubmit = () => {
    console.log(this.form.value);
  };
}
