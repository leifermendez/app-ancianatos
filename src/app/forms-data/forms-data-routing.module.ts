import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SingleFormComponent} from './pages/single-form/single-form.component';

const routes: Routes = [
  {
    path: ':id/add',
    component: SingleFormComponent
  },
  {
    path: ':id/add/:target',
    component: SingleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsDataRoutingModule {
}
