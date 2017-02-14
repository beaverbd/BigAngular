import { Component, OnInit } from '@angular/core';
import {DataPeekerService } from '../../services/data-peeker.service';

import { Injector} from '@angular/core';

import { Company } from '../../entity/company';
import { Product } from '../../entity/product';
import { AccountService } from '../../services/account.service';
import { GlobalComponent } from '../../global.component';
import { FinanceService } from '../../services/finance.service';

@Component({
	moduleId: module.id,
	selector: 'customer',
	templateUrl: 'customer.component.html',
	styleUrls: ['customer.component.css']
})

export class CustomerComponent extends GlobalComponent  implements OnInit {

	companies:Company[];
	selectedCompany:Company;
	products:Product[];
	buyingProduct:Product;
	count:number = 0;
	inProgress:boolean=false;
	result:string;
	constructor(private dataPeekerService:DataPeekerService,private financeservice:FinanceService, injector:Injector) { 
		super(injector);
		this.dataPeekerService.getCompanies()
		.subscribe(result=>{
			console.log("!!!");
			this.companies = result;			
		});
	}

	selectCompany(company:Company){
		this.result = null;
		this.buyingProduct=null;
		this.selectedCompany = company;
		this.dataPeekerService.getCompanyProducts(company.Id)
		.subscribe(this.setProducts.bind(this));

	}

	selectProduct(product:Product){
		this.buyingProduct = product;
		this.result = null;
	}
	confirmBuying(count:number){
		if(count>this.buyingProduct.Count){
			this.result = "In stock Product is not enough";
			return;
		}
		else if(count*this.buyingProduct.Price > this.accountService.user.Money) {
			this.result = "Not enought money";
			return;
		}
		else {
			this.inProgress = true;
			this.result = null;
		}
		
		this.count = count;
		this.financeservice.buyProduct(this.accountService.user.Id, this.buyingProduct,count)
		.subscribe(this.buyResult.bind(this));
	}
	setProducts(products:Product[]){
		this.products = products;
	}

	buyResult(result){
		if(result)
		{
			this.buyingProduct.Count-=this.count;
			this.result = "Success";
			this.count = 0;
		}		
		else {
			this.result = "Rejected";
		}
		this.inProgress = false;
	}

	ngOnInit() { 
	}
}