import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private authService: RestService, private router: Router,
              private translate: TranslateService,
              private route: ActivatedRoute) {
  }

  canActivate() {
    return true;
    // // If the user is not logged in we'll send them back to the home page
    // let queryParameters = {};
    // this.route.queryParams.subscribe(a => {
    //   queryParameters = a;
    // });
    // return this.authService.checkSession(true, true, {queryParameters}).then(a => {
    //   return true;
    // }).catch(e => {
    //   return false;
    // });
  }


}
