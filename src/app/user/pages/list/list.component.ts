import {Component, OnInit} from '@angular/core';
import {faUser, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  faUser = faUser;
  faPlus = faPlus;
  public data = [
    {
      id: '2',
      name: 'Leifer',
      email: 'leifer33@gmail.com',
      level: 'admin',
      user: {
        name: 'Yona',
        email: 'yona@mail.com'
      }
    },
    {
      id: '3',
      name: 'Jesus',
      email: 'leifer33@gmail.com',
      level: 'manager',
      user: {
        name: 'Yona',
        email: 'yona@mail.com'
      }
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
