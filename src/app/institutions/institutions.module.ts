import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionsRoutingModule } from './institutions-routing.module';
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import {HomeModule} from '../home/home.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {TagInputModule} from 'ngx-chips';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LoadingButtonDirective} from '../loading-button.directive';


@NgModule({
  declarations: [AddComponent, ListComponent, LoadingButtonDirective],
  imports: [
    CommonModule,
    InstitutionsRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    TranslateModule,
    TagInputModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class InstitutionsModule { }
