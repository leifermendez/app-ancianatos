import {Component, OnInit} from '@angular/core';
import {AuthGService} from '../../../auth-g.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private auth: AuthGService,
              private router: Router) {
  }

  ngOnInit() {
    this.auth.logout().then(() => {
      this.router.navigate(['/', 'auth']);
    });
  }

}
