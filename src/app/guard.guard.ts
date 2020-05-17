import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {RestService} from './rest.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private authService: RestService, private router: Router,
              private translate: TranslateService,
              private route: ActivatedRoute,
              private cookie: CookieService) {
  }

  canActivate() {
    return this.authService.checkSession(true, true).then(a => {
      return true;
    }).catch(e => {
      return false;
    });
  }


}
