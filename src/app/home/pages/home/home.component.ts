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
      name: 'User',
      icon: this.faUser,
      source: ['/', 'user']
    },
    {
      name: 'Institutions',
      icon: this.faHome,
      source: ['/']
    },
    {
      name: 'Staff',
      icon: this.faUserNurse,
      source: ['/']
    },
    {
      name: 'Patients',
      icon: this.faUserShield,
      source: ['/']
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
