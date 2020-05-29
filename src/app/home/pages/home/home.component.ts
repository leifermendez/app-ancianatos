import {Component, OnInit} from '@angular/core';
import {faUser, faHome, faUserNurse, faUserShield} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faUser = faUser;
  faHome = faHome;
  faUserNurse = faUserNurse;
  faUserShield = faUserShield;
  public menu = [
    {
      name: 'Usuarios',
      icon: this.faUser,
      source: ['/', 'user']
    },
    {
      name: 'Instituciones',
      icon: this.faHome,
      source: ['/', 'institutions']
    },
    {
      name: 'Personal',
      icon: this.faUserNurse,
      source: ['/', 'staff']
    },
    {
      name: 'Pacientes',
      icon: this.faUserShield,
      source: ['/', 'patients']
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
