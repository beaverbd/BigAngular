import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{
    canActivate(){
        console.log("Auth coled");
        return true;
    }
}