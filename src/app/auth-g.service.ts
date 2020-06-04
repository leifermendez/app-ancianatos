import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGService {

  constructor(private rest: RestService,
              private cookieService: CookieService) {
  }

  public login = (data: any) => new Promise((resolve, reject) => {
    this.rest.post(`auth/login`,
      data)
      .subscribe(res => {
        this.cookieService.set(
          'session',
          res.access_token,
          environment.daysTokenExpire,
          '/');
        this.cookieService.set(
          'user',
          JSON.stringify(res.user),
          environment.daysTokenExpire,
          '/');
        resolve(res);
      }, error => {
        reject(error);
      });
  });

  public getUser = () => {
    try {
      return JSON.parse(this.cookieService.get('user'));
    } catch (e) {
      return null;
    }
  };

  public logout = () => new Promise((resolve, reject) => {
    try {
      this.cookieService.delete('session', '/');
      this.cookieService.delete('user', '/');
      resolve(true);
    } catch (e) {
      reject(false);
    }
  });
}
