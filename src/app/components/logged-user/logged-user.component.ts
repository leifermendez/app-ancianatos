import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.css']
})
export class LoggedUserComponent implements OnInit {
  public data: any = {};
  faSignOutAlt = faSignOutAlt;

  constructor(private cookie: CookieService) {
  }

  ngOnInit() {
    this.parseUser();
  }

  parseUser = () => {
    try {
      this.data = JSON.parse(this.cookie.get('user'));
    } catch (e) {
      return null;
    }
  };

}
