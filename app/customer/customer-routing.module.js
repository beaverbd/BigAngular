"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var customer_component_1 = require('./customer.component');
var companies_component_1 = require('./companies/companies.component');
var history_component_1 = require('./history/history.component');
var deposit_component_1 = require('./deposit/deposit.component');
var customer_dashboard_component_1 = require('./customer-dashboard.component');
var app_guard_service_1 = require('../app-guard.service');
var customerRoutes = [
    {
        path: 'customer',
        component: customer_component_1.CustomerComponent,
        canActivate: [app_guard_service_1.AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: 'companies', component: companies_component_1.CompaniesComponent },
                    { path: 'history', component: history_component_1.HistoryComponent },
                    { path: 'deposit', component: deposit_component_1.DepositComponent },
                    { path: '', component: customer_dashboard_component_1.CustomerDashboardComponent }
                ]
            }
        ]
    }
];
var CustomerRoutingModule = (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(customerRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());
exports.CustomerRoutingModule = CustomerRoutingModule;
//# sourceMappingURL=customer-routing.module.js.map