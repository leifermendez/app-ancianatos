import {Component, OnInit} from '@angular/core';
import {faUser, faHome, faUserNurse, faUserShield} from '@fortawesome/free-solid-svg-icons';
import {AuthGService} from '../../../auth-g.service';

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
  public menu: any = [];

  constructor(public auth: AuthGService) {
    console.log(this.auth.getUser());
  }

  ngOnInit() {
    const {level} = this.auth.getUser();
    this.menu = [
      {
        name: 'Instituciones',
        icon: this.faHome,
        scope: ['admin'].includes(level),
        source: ['/', 'institutions']
      },
      {
        name: 'Personal',
        scope: ['admin', 'manager'].includes(level),
        icon: this.faUserNurse,
        source: ['/', 'staff']
      },
      {
        name: 'Pacientes',
        scope: ['admin', 'manager'].includes(level),
        icon: this.faUserShield,
        source: ['/', 'patients']
      },
      {
        name: 'Usuarios',
        icon: this.faUser,
        scope: ['admin'].includes(level),
        source: ['/', 'user']
      },
    ];
  }

}
