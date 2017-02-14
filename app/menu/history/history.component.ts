import { Component, OnInit } from '@angular/core';
import { GlobalComponent } from '../../global.component';
import { Injector} from '@angular/core';
import { DataPeekerService } from '../../services/data-peeker.service';
import { AccountService } from '../../services/account.service';
import { FinanceService } from '../../services/finance.service';
import { Purchase} from '../../entity/purchase';
@Component({
    moduleId:module.id,
	selector: 'history',
	templateUrl: 'history.component.html',
	styleUrls: ['history.component.css']
})
export class HistoryComponent extends GlobalComponent  implements OnInit{

    history:Purchase[];

    constructor(private financeService:FinanceService, injector:Injector){
        super(injector);
        this.financeService.getUserPurchasesHistory()
        .subscribe(this.setHistory.bind(this));
    }

    setHistory(newHistory:Purchase[]){
        this.history = newHistory;
    }

    ngOnInit(){

    }
}