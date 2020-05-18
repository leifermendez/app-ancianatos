import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InstitutionsRoutingModule} from './institutions-routing.module';
import {AddComponent} from './pages/add/add.component';
import {ListComponent} from './pages/list/list.component';
import {HomeModule} from '../home/home.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {TagInputModule} from 'ngx-chips';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LoadingButtonDirective} from '../loading-button.directive';
import {LoadingBlockComponent} from '../components/loading-block/loading-block.component';
import {FilePickerModule} from 'ngx-awesome-uploader';
import {SharedModule} from '../shared/shared.module';
import {ListFormsComponent} from '../components/list-forms/list-forms.component';


@NgModule({
  declarations: [AddComponent, ListComponent, ListFormsComponent, ListFormsComponent],
  imports: [
    CommonModule,
    InstitutionsRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
    TagInputModule,
    FontAwesomeModule,
    FormsModule,
    FilePickerModule
  ]
})
export class InstitutionsModule {
}
