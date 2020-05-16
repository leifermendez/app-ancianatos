import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {GuardGuard} from '../guard.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [GuardGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
