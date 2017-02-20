import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CompaniesComponent } from './companies/companies.component';
import { HistoryComponent } from './history/history.component';
import { DepositComponent } from './deposit/deposit.component';
import { CustomerDashboardComponent } from './customer-dashboard.component';
import { AuthGuard } from '../app-guard.service';

const customerRoutes:Routes=[
    {
        path:'customer',
        component: CustomerComponent,
        canActivate:[AuthGuard],
        children:[
            {
            path:'',
            children:[
                {path:'companies', component: CompaniesComponent},
                {path:'history',component:HistoryComponent},
                {path:'deposit',component:DepositComponent},
                {path:'',component:CustomerDashboardComponent}
                ]
            }   
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(customerRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class CustomerRoutingModule{

}