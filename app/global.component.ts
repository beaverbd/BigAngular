import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './services/account.service';
import { Injector } from '@angular/core';

export class GlobalComponent{

    protected router:Router;
    protected accountService:AccountService;

    constructor(injector:Injector){
        this.router = injector.get(Router);
        this.accountService = injector.get(AccountService);

        if(!this.accountService.user.IsAutorized){
            this.router.navigate(['/autorization/login']);
        }
        if(this.router.url.includes('manager') && this.accountService.user.Role != 'Manager')
        {
            this.router.navigate(['/menu/customer']);
        }
    }

    // ngOnInit(){
       
    // }
}