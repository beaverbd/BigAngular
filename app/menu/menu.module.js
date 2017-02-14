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
var manager_component_1 = require('./manager/manager.component');
var customer_component_1 = require('./customer/customer.component');
var admin_component_1 = require('./admin/admin.component');
var menu_routing_module_1 = require('./menu-routing.module');
var deposit_component_1 = require('./deposit/deposit.component');
var history_component_1 = require('./history/history.component');
var data_peeker_service_1 = require('../services/data-peeker.service');
var MenuModule = (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                menu_routing_module_1.MenuRoutingModule,
                http_1.HttpModule
            ],
            declarations: [
                manager_component_1.ManagerComponent,
                customer_component_1.CustomerComponent,
                admin_component_1.AdminComponent,
                deposit_component_1.DepositComponent,
                history_component_1.HistoryComponent
            ],
            providers: [data_peeker_service_1.DataPeekerService]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuModule);
    return MenuModule;
}());
exports.MenuModule = MenuModule;
//# sourceMappingURL=menu.module.js.map