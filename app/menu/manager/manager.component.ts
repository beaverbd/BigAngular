import { Component, OnInit } from '@angular/core';
import { GlobalComponent } from '../../global.component';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { Company } from '../../entity/company';
import { Product } from '../../entity/product';
import { DataPeekerService } from '../../services/data-peeker.service';

import { Injector} from '@angular/core';
@Component({
	moduleId: module.id,
	selector: 'manager',
	templateUrl: 'manager.component.html',
	styleUrls: ['manager.component.css']
})

export class ManagerComponent extends GlobalComponent implements OnInit{
	companies:Company[];
	selectedCompany:Company;
	
	constructor(private dataPeekerSerivce:DataPeekerService, injector:Injector){
		super(injector);
		dataPeekerSerivce.getCompaniesAsManager(this.accountService.user.Id)
		.subscribe(result=>this.companies=result);
	}

	selectCompany(company:Company){
		this.selectedCompany = company;
	}
	ngOnInit(){
		
	}
	
}