import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountService } from '../services/account.service'; 
import { AutorizationRoutingModule } from './autorization-routing.module';



@NgModule({
    imports: [
                CommonModule, 
                FormsModule, 
                AutorizationRoutingModule,
                HttpModule
                ],
    declarations: [
                    LoginComponent, 
                    RegisterComponent
                   ],
    providers: []
})
export class AutorizationModule{

}