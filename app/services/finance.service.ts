import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Globals } from './global-variables';
import { Product } from '../entity/product';
import { AccountService } from './account.service';
import { Purchase } from '../entity/purchase';
@Injectable()
export class FinanceService{

    constructor(private http:Http, private globals:Globals,
    private accountService:AccountService){

    }

    buyProduct(userId:string,product:Product,count:number):Observable<boolean>{
        return this.http
        .post(this.globals.SiteUrl + '/api/Finance/BuyProduct?userId=' + userId + '&prodId='+ product.Id+ '&count=' + count,"")
        .map(resp=>resp.json());
    }

    deposit(money:number):Observable<boolean>{
        return this.http
        .post(this.globals.SiteUrl + '/api/Finance/Deposit?userId=' + this.accountService.user.Id + '&money=' + money,"")
        .map(resp=>{
            if(resp.json()){
                this.accountService.user.Money += +money;
            }
            return resp.json()
        });
    }

    getUserMoney():Observable<number>{
        return this.http
        .get(this.globals.SiteUrl + '/api/Finance/GetUserMoney?userId=' + this.accountService.user.Id)
        .map(resp=>{
            this.accountService.user.Money = +resp.json();
            return resp.json();
        });
    }

    getUserPurchasesHistory():Observable<Purchase[]>{
        return this.http
        .get(this.globals.SiteUrl + '/api/Finance/GetPurchaseHistory?userId=' + this.accountService.user.Id)
        .map(resp=>{
            return resp.json();
        });
    }
}