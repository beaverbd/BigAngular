import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'autorization' , redirectTo: '/login', pathMatch:'full'},
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent}        
    ])],
    exports: [RouterModule]
})
export class AutorizationRoutingModule{

}