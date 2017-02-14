import {Component} from '@angular/core';
import { User } from '../../entity/user';
import { AccountService } from '../../services/account.service';

@Component({
    moduleId:module.id,
    selector:'register-app',
    templateUrl:'register.component.html',
    styleUrls:['register.component.css']
})
export class RegisterComponent{
    confirmPassError:boolean = false;
    confirmPass:string;
    
    user:User = new User();

    constructor(private accountService:AccountService){}

    register():void{
        this.confirmPassError = this.user.Password != this.confirmPass;
        if(!this.confirmPassError)
            this.accountService.register(this.user);
    }
}