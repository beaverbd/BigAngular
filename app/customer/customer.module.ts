import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomerComponent } from './customer.component';
import { CustomerDashboardComponent } from './customer-dashboard.component';
import { CompaniesComponent } from './companies/companies.component';
import { DepositComponent } from './deposit/deposit.component';
import { HistoryComponent } from './history/history.component';

import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
    imports:[
        CommonModule,
        CustomerRoutingModule,
        FormsModule,
        HttpModule
    ],
    declarations:[
        CustomerComponent,
        CustomerDashboardComponent,
        CompaniesComponent,
        HistoryComponent,
        DepositComponent
    ]
})
export class CustomerModule{

}