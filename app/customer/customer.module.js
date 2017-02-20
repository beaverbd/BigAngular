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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var customer_component_1 = require('./customer.component');
var customer_dashboard_component_1 = require('./customer-dashboard.component');
var companies_component_1 = require('./companies/companies.component');
var deposit_component_1 = require('./deposit/deposit.component');
var history_component_1 = require('./history/history.component');
var customer_routing_module_1 = require('./customer-routing.module');
var CustomerModule = (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                customer_routing_module_1.CustomerRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [
                customer_component_1.CustomerComponent,
                customer_dashboard_component_1.CustomerDashboardComponent,
                companies_component_1.CompaniesComponent,
                history_component_1.HistoryComponent,
                deposit_component_1.DepositComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerModule);
    return CustomerModule;
}());
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=customer.module.js.map