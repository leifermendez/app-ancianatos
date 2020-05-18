import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsDataRoutingModule } from './forms-data-routing.module';
import { SingleFormComponent } from './pages/single-form/single-form.component';


@NgModule({
  declarations: [SingleFormComponent],
  imports: [
    CommonModule,
    FormsDataRoutingModule
  ]
})
export class FormsDataModule { }
