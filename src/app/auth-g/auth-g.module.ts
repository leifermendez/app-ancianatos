import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGRoutingModule } from './auth-g-routing.module';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthGRoutingModule
  ]
})
export class AuthGModule { }
