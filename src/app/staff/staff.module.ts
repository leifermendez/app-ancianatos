import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StaffRoutingModule} from './staff-routing.module';
import {AddComponent} from './pages/add/add.component';
import {ListComponent} from './pages/list/list.component';
import {SharedModule} from '../shared/shared.module';
import {TagInputModule} from 'ngx-chips';
import {HomeModule} from '../home/home.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FilePickerModule} from 'ngx-awesome-uploader';


@NgModule({
  declarations: [AddComponent, ListComponent],
  imports: [
    CommonModule,
    TagInputModule,
    SharedModule,
    StaffRoutingModule,
    HomeModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    FilePickerModule
  ]
})
export class StaffModule {
}
