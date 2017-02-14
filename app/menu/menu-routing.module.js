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
var router_1 = require('@angular/router');
var customer_component_1 = require('./customer/customer.component');
var manager_component_1 = require('./manager/manager.component');
var admin_component_1 = require('./admin/admin.component');
var deposit_component_1 = require('./deposit/deposit.component');
var history_component_1 = require('./history/history.component');
var MenuRoutingModule = (function () {
    function MenuRoutingModule() {
    }
    MenuRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild([
                    { path: 'customer', component: customer_component_1.CustomerComponent },
                    { path: 'manager', component: manager_component_1.ManagerComponent },
                    { path: 'admin', component: admin_component_1.AdminComponent },
                    { path: 'deposit', component: deposit_component_1.DepositComponent },
                    { path: 'history', component: history_component_1.HistoryComponent }
                ])],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuRoutingModule);
    return MenuRoutingModule;
}());
exports.MenuRoutingModule = MenuRoutingModule;
//# sourceMappingURL=menu-routing.module.js.map