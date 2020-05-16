import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {HeaderComponent} from '../components/header/header.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule
  ]
})
export class HomeModule {
}
