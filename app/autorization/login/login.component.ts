import {Component} from '@angular/core';
import { AccountService} from '../../services/account.service';

@Component({
    moduleId: module.id,
    selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent{
    loginResult:boolean = true;
    constructor(private accountServcie:AccountService){

    }

    login(email:string,password:string){
        this.accountServcie.login(email,password)
        .subscribe(result => this.loginResult=result);
    }


}