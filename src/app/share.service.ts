import {EventEmitter, Injectable} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import Swal from 'sweetalert2';
import {CookieService} from 'ngx-cookie-service';
import {RestService} from './rest.service';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public locationEmit = new EventEmitter<any>();
  public userEmit = new EventEmitter<any>();
  public typeRegister = new EventEmitter<any>();
  modalRef: BsModalRef;
  config = {
    ignoreBackdropClick: false,
    keyboard: false
  };
  public win = {
    close() {

    },
    location: {pathname: null, search: null, href: null}
  };

  constructor(private meta: Meta,
              private modalService: BsModalService,
              private cookieService: CookieService,
              public http: HttpClient) {
  }

  setReferenceUser = (obj) => {
    this.cookieService.set('user_reference', JSON.stringify(obj), environment.daysTokenExpire, '/');
  };

  getReferenceUser = () => {
    return (this.cookieService.get('user_reference')) ? JSON.parse(this.cookieService.get('user_reference')) : [];
  };

  emitTypeRegister = (obj) => this.typeRegister.emit(obj);

  // loading = (flag = true) => {
  //   if (flag) {
  //     this.spinner.show();
  //   } else {
  //     this.spinner.hide();
  //   }
  //
  // };

  setUserCookie = (obj) => {
    if (Object.values(obj).length) {
      this.userEmit.emit(obj);
      this.cookieService.set('user', JSON.stringify(obj), environment.daysTokenExpire, '/');
    }
  };

  refreshCookie = () => {
    const user = (this.cookieService.get('user')) ? JSON.parse(this.cookieService.get('user')) : null;
    if (user) {
      this.userEmit.emit(user);
    } else {
      return {};
    }
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((a) => this.showPosition(a),
        e => this.showPositionError(e));
    } else {
      console.log('Geo Location not supported by browser');
    }
  };

  showPositionError = (e) => {
    this.locationEmit.emit(e);
  };

  confirm = (title = '', text = '', ok = '') => {
    return new Promise((resolve, reject) => {
      Swal.fire({
        title,
        text,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        customClass: {
          container: 'container-class'
        },
        confirmButtonText: ok
      }).then((result) => {
        if (result.value) {
          resolve(true);
        } else {
          reject(false);
        }
      });
    });
  };

  post(path = '', body = {}): Observable<any> {
    try {
      return this.http.post(`${environment.api}/${path}`, body)
        .pipe();
    } catch (e) {

    }
  }

  parseJson = (src = '') => {
    try {
      return JSON.parse(src);
    } catch (e) {
      return null;
    }
  };

  scrollAnimated = () => {
    try {
      window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    } catch (e) {
      window.scrollTo(0, 0);
    }
  };

  newsLetterPush = (obj) => {
    const user = (this.cookieService.get('user')) ? JSON.parse(this.cookieService.get('user')) : null;
    const payload = {
      ...JSON.parse(obj),
      ...{
        user
      }
    };

    this.post(`notifications`, payload).subscribe();
  };

  // openHelpModal = (data = '', target = null) => {
  //   const initialState = {
  //     ignoreBackdropClick: true,
  //     data,
  //     target
  //     // emitBack: this.emitBack,
  //     // position: this.position,
  //     // emitBackData: this.emitBackData,
  //   };
  //
  //   this.modalRef = this.modalService.show(
  //     HelpModalComponent,
  //     Object.assign({initialState}, {
  //         class: 'modal-help-hero'
  //       },
  //       this.config)
  //   );
  //   this.modalRef.content.closeBtnName = 'Cerrar';
  // };

  alert = (title = '', text = '') => {
    return new Promise((resolve, reject) => {
      Swal.fire({
        title,
        text,
      }).then(a => {
        resolve(true);
      }).catch(e => console.log(e));
    });
  };

  showPosition = (position) => {
    const geo = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
      provider: 'device'
    };
    this.locationEmit.emit(geo);
  };

  getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = this.win.location.href.match(regex);
    return (results.length > 0) ? results[1] : null;
  };

  getQueryParameters = (param = '') => {
    const urlParams = new URLSearchParams(this.win.location.search);
    return urlParams.get(param);
  };

  openPaypalTab = (
    url: '') => {
    // tslint:disable-next-line:variable-name
    const _this = this;
    return new Promise((resolve, reject) => {
      try {
        const strWindowFeatures = 'location=yes,height=620,width=520,scrollbars=yes,resizable=yes,status=yes';
        _this.win = window.open(url,
          'paypalAppTab',
          strWindowFeatures
        );

        setInterval(() => {

          try {
            const parameters = {
              id: this.getQueryParameters('paymentId'),
              token: this.getQueryParameters('token'),
              payerId: this.getQueryParameters('PayerID'),
            };
            console.log(_this.win.location);
            if (_this.win.location.href.includes('checkout/thankyou')) {
              resolve(parameters);
            } else if (_this.win.location.href.includes('checkout/error')) {

              reject(parameters);
            }
          } catch (e) {


          }

          // if (responseToken) {
          //   const token = responseToken.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
          //   const req = new XMLHttpRequest();
          //   req.open('GET', 'https://api.twitch.tv/helix/users?scope=user:read:email', false);
          //   req.setRequestHeader('Authorization', 'Bearer ' + token);
          //   req.send(null);
          //   if (req.status === 200) {
          //     if (req.response && JSON.parse(req.response)) {
          //       const response = JSON.parse(req.response);
          //       const data = (response.data[0]) ? response.data[0] : {};
          //       data.token = token;
          //       resolve(data);
          //     }
          //   }
          // }
        }, 1000);

      } catch (e) {
        reject(e);
      }
    });

  };

  openLinkStripe = (
    url: '') => {
    // tslint:disable-next-line:variable-name
    const _this = this;
    return new Promise((resolve, reject) => {
      try {
        const strWindowFeatures = 'location=yes,height=620,width=520,scrollbars=yes,resizable=yes,status=yes';
        _this.win = window.open(url,
          'stripeAuthLink',
          strWindowFeatures
        );

        setInterval(() => {

          try {
            const parameters = {
              code: this.getUrlParameter('code')
            };
            if (_this.win.location.href.includes('?code=')) {
              console.log(_this.win.location);
              resolve(parameters);
            } else if (_this.win.location.href.includes('error')) {
              reject(parameters);
            }
          } catch (e) {


          }

          // if (responseToken) {
          //   const token = responseToken.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
          //   const req = new XMLHttpRequest();
          //   req.open('GET', 'https://api.twitch.tv/helix/users?scope=user:read:email', false);
          //   req.setRequestHeader('Authorization', 'Bearer ' + token);
          //   req.send(null);
          //   if (req.status === 200) {
          //     if (req.response && JSON.parse(req.response)) {
          //       const response = JSON.parse(req.response);
          //       const data = (response.data[0]) ? response.data[0] : {};
          //       data.token = token;
          //       resolve(data);
          //     }
          //   }
          // }
        }, 1000);

      } catch (e) {
        reject(e);
      }
    });

  };

  closeModal = () => this.win.close();

  changeThemeColor(color: string) {
    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    metaThemeColor.setAttribute('content', color);
  }

  changeMeta(obj) {
    const {title, description, image} = obj;
    const mainTitle = document.querySelector(`title`);
    const ogTitle = document.querySelector(`meta[property='og:title']`);
    const ogDescription = document.querySelector(`meta[property='og:description']`);
    const ogImage = document.querySelector(`meta[property='og:image']`);
    // const twTitle = document.querySelector(`meta[property='twitter:title']`);
    // const twDescription = document.querySelector(`meta[property='twitter:description']`);
    // const twImage = document.querySelector(`meta[property='twitter:image']`);

    mainTitle.setAttribute('content', title);
    ogTitle.setAttribute('content', title);
    ogDescription.setAttribute('content', description);
    ogImage.setAttribute('content', image);
    // twTitle.setAttribute('content', title);
    // twDescription.setAttribute('content', descrgoogle-libphonenumbeription);
    // twImage.setAttribute('content', image);
  }

  showSuccess(title = '', message = '') {
    // this.toastr.success(message, title);
  }

  showError(title = '', message = '') {
    // this.toastr.error(message, title);
  }

  randomStr = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };


  openInBrowser = (target, browserScheme) => {
    const ifc = document.createElement('div');
    ifc.innerHTML = `<iframe src='${browserScheme}${target}' style='width:0;height:0;border:0; border:none;visibility: hidden;'></iframe>`;
    document.body.appendChild(ifc);
  };


  isInApp = (appSpecificUserAgents) => {
    let i = 0;
    // @ts-ignore
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    for (i = 0; i <= appSpecificUserAgents.length; i++) {
      if (userAgent.indexOf(appSpecificUserAgents[i]) > -1) {
        return true;
      }
    }
  };

  public parsePageUrl = (url: string) => {
    try {
      console.log(url);
      return url.split('?').reverse().find(b => true)
        .split('=').reverse().find(c => true);
    } catch (e) {
      return null;
    }
  };

  public wrapperDataExtra = (data: any) => {
    try {
      return Object.keys(data.extra).map((k) => data.extra[k]);
    } catch (e) {
      return null;
    }
  };

   toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });


}
