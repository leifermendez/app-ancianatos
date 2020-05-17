import {FilePreviewModel} from 'ngx-awesome-uploader';
import {HttpRequest, HttpClient, HttpEvent, HttpEventType, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FilePickerAdapter} from 'ngx-awesome-uploader';
import {environment} from '../environments/environment';
import {CookieService} from 'ngx-cookie-service';

export class FPickerAdapter extends FilePickerAdapter {
  constructor(private http: HttpClient, private cookieService: CookieService) {
    super();
  }

  private headers = () => {
    const token = this.cookieService.get('session');
    const header = {
      Authorization: `Bearer ${token}`
    };
    return new HttpHeaders(header);
  };

  public uploadFile(fileItem: FilePreviewModel) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('authentication', `a`);


    const form = new FormData();
    form.append('file', fileItem.file);
    const api = `${environment.api}/media`;
    const req = new HttpRequest('POST', api, form,
      {
        reportProgress: true,
        headers: this.headers()
      });
    return this.http.request(req)
      .pipe(
        map((res: HttpEvent<any>) => {
          if (res.type === HttpEventType.Response) {
            return JSON.stringify(res.body.data);
          } else if (res.type === HttpEventType.UploadProgress) {
            // Compute and show the % done:
            const UploadProgress = +Math.round((100 * res.loaded) / res.total);
            return UploadProgress;
          }
        })
      );
  }

  public removeFile(fileItem: FilePreviewModel): Observable<any> {
    console.log(fileItem.fileId);
    const removeApi = `${environment.api}/media/${fileItem.fileId}`;
    return this.http.delete(removeApi);
  }
}
