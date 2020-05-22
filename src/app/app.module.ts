import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ModalModule} from 'ngx-bootstrap/modal';
import {Page404pageComponent} from './components/page404page/page404page.component';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {ModalPhotoComponent} from './components/modal-photo/modal-photo.component';
import {TimeagoModule} from 'ngx-timeago';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {WebCamComponent} from './components/web-cam/web-cam.component';
import {WebcamModule} from 'ngx-webcam';
import { Camera } from '@ionic-native/camera/ngx';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    Page404pageComponent,
    ModalPhotoComponent,
    WebCamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ModalModule.forRoot(),
    HttpClientModule,
    LottieModule.forRoot({player: playerFactory}),
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    TimeagoModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    WebcamModule
  ],
  providers: [
    Camera
  ],
  exports: [],
  entryComponents: [ModalPhotoComponent,
    WebCamComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
