import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SingleFormComponent} from './pages/single-form/single-form.component';

const routes: Routes = [
  {
    path: ':section/add',
    component: SingleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsDataRoutingModule {
}
