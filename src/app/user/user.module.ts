import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import {HomeModule} from '../home/home.module';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HomeModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
