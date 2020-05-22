import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {GuardGuard} from './guard.guard';
import {Page404pageComponent} from './components/page404page/page404page.component';


// @ts-ignore
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth-g/auth-g.module#AuthGModule',
  },
  {
    path: '404',
    component: Page404pageComponent,
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [GuardGuard]
  },
  {
    path: 'institutions',
    loadChildren: './institutions/institutions.module#InstitutionsModule',
    canActivate: [GuardGuard]
  },
  {
    path: 'forms',
    loadChildren: './forms-data/forms-data.module#FormsDataModule',
    canActivate: [GuardGuard]
  },
  {
    path: 'patients',
    loadChildren: './patients/patients.module#PatientsModule',
    canActivate: [GuardGuard]
  },
  {
    path: 'staff',
    loadChildren: './staff/staff.module#StaffModule',
    canActivate: [GuardGuard]
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    canActivate: [GuardGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: false,
      scrollPositionRestoration: 'enabled',
      useHash: true
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
