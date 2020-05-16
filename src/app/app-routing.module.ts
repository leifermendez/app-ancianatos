import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule} from '@angular/router';


// @ts-ignore
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth-g/auth-g.module#AuthGModule',
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'institutions',
    loadChildren: './institutions/institutions.module#InstitutionsModule',
  },
  {
    path: 'patients',
    loadChildren: './patients/patients.module#PatientsModule',
  },
  {
    path: 'staff',
    loadChildren: './staff/staff.module#StaffModule',
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: false,
      scrollPositionRestoration: 'enabled',
      useHash: false
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
