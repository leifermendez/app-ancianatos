import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LoggedUserComponent} from './components/logged-user/logged-user.component';
import {BsModalService, ModalModule} from 'ngx-bootstrap/modal';
import {Page404pageComponent} from './components/page404page/page404page.component';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import { LoadingButtonDirective } from './loading-button.directive';
import { LoadingBlockComponent } from './components/loading-block/loading-block.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    Page404pageComponent
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
    FormlyModule.forRoot()
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
