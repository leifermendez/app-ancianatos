import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {HeaderComponent} from '../components/header/header.component';
import {TranslateModule} from '@ngx-translate/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LoggedUserComponent} from '../components/logged-user/logged-user.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LoggedUserComponent
  ],
  exports: [
    HeaderComponent,
    LoggedUserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    FontAwesomeModule
  ]
})
export class HomeModule {
}
