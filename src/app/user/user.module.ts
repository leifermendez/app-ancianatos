import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import {HomeModule} from '../home/home.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ListComponent, AddComponent],
    imports: [
        CommonModule,
        TagInputModule,
        UserRoutingModule,
        HomeModule,
        TranslateModule,
        ReactiveFormsModule,
        FormsModule,
        FontAwesomeModule
    ]
})
export class UserModule { }
