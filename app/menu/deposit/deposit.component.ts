import { Component, OnInit } from '@angular/core';
import { GlobalComponent } from '../../global.component';
import { Injector} from '@angular/core';
import { DataPeekerService } from '../../services/data-peeker.service';
import { AccountService } from '../../services/account.service';
import { FinanceService } from '../../services/finance.service';
@Component({
    moduleId:module.id,
	selector: 'deposit',
	templateUrl: 'deposit.component.html',
	styleUrls: ['deposit.component.css']
})
export class DepositComponent extends GlobalComponent  implements OnInit{

    currentAmount:number;
    deposited:boolean= false;
    inProgress:boolean = false;
    amount:number=0;
    result:string;
    constructor(private financeService:FinanceService, injector:Injector){
        super(injector);
        financeService.getUserMoney()
        .subscribe(this.setMoney.bind(this));
    }

    deposit(amount:number){
        this.deposited=false;
        this.inProgress = true;
        this.financeService.deposit(amount)
        .subscribe(this.depositResult.bind(this));
    }

    depositResult(result){        
        if(result)
        {            
            this.currentAmount = this.accountService.user.Money;
            this.result = "Successfully";
        }
        else {
        this.result = "Rejected";
        }
        this.deposited=true;
        this.inProgress = false;
    }

    setMoney(amount:number){
        this.currentAmount = amount;
    }

    ngOnInit(){
        
    }
}