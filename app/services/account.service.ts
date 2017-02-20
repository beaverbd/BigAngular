import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Globals } from './global-variables';
import { User} from '../entity/user';
@Injectable()
export class AccountService{
    public user:User = new User();

    private subject: Subject<User> = new BehaviorSubject<User>(this.user);

    constructor(private http: Http, private globals:Globals){}

    login(email:string, password:string):Observable<boolean>{
        return this.http
        .get( this.globals.SiteUrl + '/api/Account/Login?email='+email + '&password=' + password)
        .map((data)=>{
                this.userLogin(data.json());
                this.user = data.json();
                return this.user.IsAutorized;
            });       
    }

    register(user){
        let headers = new Headers({'Content-Type' : 'application/json;charset=utf-8'})
        let reqStr = this.globals.SiteUrl + '/api/Account/RegisterCustomer';
        return this.http
        .post(reqStr,JSON.stringify(user),{headers:headers})
        .subscribe(
            (data)=> {
                this.user = data.json();
                this.userLogin(this.user);
            },
            (error)=>console.log(error));
    }

    userLogin(user:User):void{
        this.subject.next(this.user);
    }

    loginStatusChanged(): Observable<User>{
        return this.subject.asObservable();
    }

    getLoginStatus():boolean{
        return this.user.IsAutorized;
    }
}