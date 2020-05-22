import {Component, OnInit} from '@angular/core';
import {Subject, Observable, throwError} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {faCircle, faSyncAlt} from '@fortawesome/free-solid-svg-icons';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {catchError} from 'rxjs/operators';
import {ShareService} from '../../share.service';
import {environment} from '../../../environments/environment';
import {RestService} from '../../rest.service';
import {BsModalRef} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-web-cam',
  templateUrl: './web-cam.component.html',
  styleUrls: ['./web-cam.component.css']
})
export class WebCamComponent implements OnInit {
  constructor(private http: HttpClient, private cookieService: CookieService,
              private sharedService: ShareService, private rest: RestService,
              private bsModalRef: BsModalRef) {
  }

  // toggle webcam on/off
  faCircle = faCircle;
  faSyncAlt = faSyncAlt;
  public showWebcam = false;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public loading: any = false;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public deviceReady = false;
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  public ngOnInit(): void {

    this.showWebcam = true;
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    // console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    console.log(this.webcamImage);
    this.dataURLtoFile(
      this.webcamImage.imageAsDataUrl,
      `file.png`,
      `image/png`).then(r => this.uploadImage(r));
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  public dataURLtoFile = (url, filename, mimeType) => {
    return (fetch(url)
        .then((res) => {
          return res.arrayBuffer();
        })
        .then((buf: any) => {
          return new File([buf], filename, {type: mimeType});
        })
    );
  };

  private uploadImage = (image: any) => {
    const formData = new FormData();
    formData.append('file', image);
    this.loading = true;
    this.post(`media`, formData).subscribe(im => {
      this.sharedService.camImage.emit(im);
      // this.loading = true;
      this.bsModalRef.hide();
    }, err => {
      // this.loading = true;
      this.bsModalRef.hide();
    });
  };

  parseHeader = () => {
    const token = this.cookieService.get('session');
    const header = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    };
    return new HttpHeaders(header);
  };

  post(path = '', body = {}, toast = true): Observable<any> {
    try {
      return this.http.post(`${environment.api}/${path}`, body,
        {headers: this.parseHeader()})
        .pipe(
          catchError((e: any) => {
            if (toast) {
              this.sharedService.showError('Error', e.statusText);
            }
            this.rest.handleError(e.status, e.statusText, e.error);
            return throwError({
              status: e.status,
              statusText: e.statusText,
              e
            });
          }),
        );
    } catch (e) {

    }
  }
}
