import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGRoutingModule } from './auth-g-routing.module';
import { LoginComponent } from './pages/login/login.component';
import {HomeModule} from '../home/home.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthGRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class AuthGModule { }
