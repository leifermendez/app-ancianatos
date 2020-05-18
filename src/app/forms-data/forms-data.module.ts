import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsDataRoutingModule} from './forms-data-routing.module';
import {SingleFormComponent} from './pages/single-form/single-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyFieldInput} from '../fieldsTypes/formly-field-input';
import {HomeModule} from '../home/home.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormlyFieldSelect} from '../fieldsTypes/formly-field-select';
import {FormlyFieldText} from '../fieldsTypes/formly-field-text';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [SingleFormComponent,
    FormlyFieldInput, FormlyFieldSelect, FormlyFieldText],
  imports: [
    CommonModule,
    FormsDataRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        {name: 'input', component: FormlyFieldInput},
        {name: 'select', component: FormlyFieldSelect},
        {name: 'textarea', component: FormlyFieldText},
      ],
    }),
    HomeModule,
    TranslateModule,
    SharedModule
  ]
})
export class FormsDataModule {
}
