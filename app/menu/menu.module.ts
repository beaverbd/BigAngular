import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ManagerComponent } from './manager/manager.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { AccountService } from '../services/account.service'; 
import { MenuRoutingModule } from './menu-routing.module';
import { DepositComponent } from './deposit/deposit.component';
import { HistoryComponent } from './history/history.component';

import { DataPeekerService} from '../services/data-peeker.service';

@NgModule({
    imports: [
                CommonModule, 
                FormsModule, 
                MenuRoutingModule,
                HttpModule
                ],
    declarations: [
                    ManagerComponent, 
                    CustomerComponent,
                    AdminComponent,
                    DepositComponent,
                    HistoryComponent                    
                   ],
    providers: [DataPeekerService]
})
export class MenuModule{

}