import { Component, OnInit } from '@angular/core';
import { Injector} from '@angular/core';
import { DataPeekerService } from '../../services/data-peeker.service';
import { AccountService } from '../../services/account.service';
import { FinanceService } from '../../services/finance.service';
import { Purchase} from '../../entity/purchase';
@Component({
    moduleId:module.id,
	templateUrl: 'history.component.html',
	styleUrls: ['history.component.css']
})
export class HistoryComponent implements OnInit{

    history:Purchase[];

    constructor(private financeService:FinanceService){
        this.financeService.getUserPurchasesHistory()
        .subscribe(this.setHistory.bind(this));
    }

    setHistory(newHistory:Purchase[]){
        this.history = newHistory;
    }

    ngOnInit(){

    }
}