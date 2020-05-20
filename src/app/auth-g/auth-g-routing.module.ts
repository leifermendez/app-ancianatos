import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {LogOutComponent} from './pages/log-out/log-out.component';
import {ConfirmedComponent} from './pages/confirmed/confirmed.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogOutComponent
  },
  {
    path: 'confirmed/:token',
    component: ConfirmedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthGRoutingModule {
}
