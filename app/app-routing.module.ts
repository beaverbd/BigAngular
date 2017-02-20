import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/autorization/login', pathMatch: 'full' },
  { path: 'autorization', loadChildren:'app/autorization/autorization.module#AutorizationModule' },
  { path: 'menu', loadChildren:'app/menu/menu.module#MenuModule'},
  { path: 'customer', loadChildren:'app/customer/customer.module#CustomerModule'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}