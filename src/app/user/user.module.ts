import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {ListComponent} from './pages/list/list.component';
import {AddComponent} from './pages/add/add.component';
import {HomeModule} from '../home/home.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LoadingButtonDirective} from '../loading-button.directive';
import {LoadingBlockComponent} from '../components/loading-block/loading-block.component';
import {SharedModule} from '../shared/shared.module';
import {FilePickerModule} from 'ngx-awesome-uploader';


@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    TagInputModule,
    SharedModule,
    UserRoutingModule,
    HomeModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    FilePickerModule
  ]
})
export class UserModule {
}
