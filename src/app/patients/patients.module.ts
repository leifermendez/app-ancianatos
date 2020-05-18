import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import {HomeModule} from '../home/home.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {TagInputModule} from 'ngx-chips';
import {FilePickerModule} from 'ngx-awesome-uploader';


@NgModule({
  declarations: [AddComponent, ListComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    HomeModule,
    FontAwesomeModule,
    SharedModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    TagInputModule,
    FilePickerModule
  ]
})
export class PatientsModule { }
