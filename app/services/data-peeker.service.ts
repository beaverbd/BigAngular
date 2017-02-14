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

    createProduct(productName:string, companyId:number,productPrice:number):Observable<boolean>{
        return this.http
        .post(this.globals.SiteUrl + '/api/Data/CreateProduct?productName='+productName + '&companyId='+ companyId+'&productPrice='+productPrice,"")
        .map(result=>result.json());
    }

    changeCompany(companyId:number,companyName:string,companyDescription:string):Observable<boolean>{
        return this.http
        .post(this.globals.SiteUrl + '/api/Data/ChangeCompany?Id='+companyId+'&Name='+companyName+'&description='+companyDescription,"")
        .map(result=>result.json());
    }
    removeProduct(productId:number):Observable<boolean>{
        return this.http
        .post(this.globals.SiteUrl + '/api/Data/RemoveProduct?Id='+productId,"")
        .map(result=>result.json());
    }
    addProductDelivery(productId:number,count:number,title:string):Observable<boolean>{
        return this.http
        .post(this.globals.SiteUrl + '/api/Data/ProductDelivery?Id='+ productId+'&count='+count+'&title='+title,"")
        .map(result=>result.json());
    }
    changeProduct(productId:number,name:string,price:number):Observable<boolean>{
        return this.http
        .post(this.globals.SiteUrl+'/api/Data/ChangeProduct?Id='+productId+'&name='+name+'&price='+price,"")
        .map(result=>result.json());
    }
    some(){
        
    }

 
} 