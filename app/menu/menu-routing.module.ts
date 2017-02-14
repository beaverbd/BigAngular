import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { ManagerComponent } from './manager/manager.component';
import { AdminComponent } from './admin/admin.component';
import { DepositComponent } from './deposit/deposit.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'customer', component: CustomerComponent },
        { path: 'manager', component: ManagerComponent},
        { path: 'admin', component: AdminComponent},
        { path: 'deposit', component: DepositComponent },
        { path: 'history', component: HistoryComponent}
    ])],
    exports: [RouterModule]
})
export class MenuRoutingModule{

}