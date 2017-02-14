import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Globals } from './global-variables';
import { Company } from '../entity/company';
import { Product } from '../entity/product';

@Injectable()
export class DataPeekerService{

    constructor(private globals:Globals,
                private http   :Http){

    }

    getCompanies():Observable<Company[]>{
        return this.http.get(this.globals.SiteUrl + '/api/Data/GetCompanies')
        .map((result)=>{
           return result.json();
        })
        .catch((error)=>new Observable<Company[]>());
    }

    getCompaniesAsManager(managerId:string):Observable<Company[]>{
        return this.http
        .get(this.globals.SiteUrl + '/api/Data/GetManagersCompanies?userId=' + managerId)
        .map(result=>result.json());
    }

    getCompanyProducts(companyId:number):Observable<Product[]>{
        return this.http
        .get(this.globals.SiteUrl + '/api/Data/GetCompanyProducts?companyId='+companyId)
        .map((result)=> {
            return result.json();
        })
        .catch((error)=> new Observable<Product[]>());
    }

 
} 