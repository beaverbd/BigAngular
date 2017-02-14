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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var global_variables_1 = require('./services/global-variables');
var user_service_1 = require('./services/user.service');
var autorization_module_1 = require('./autorization/autorization.module');
var menu_module_1 = require('./menu/menu.module');
var account_service_1 = require('./services/account.service');
var finance_service_1 = require('./services/finance.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                autorization_module_1.AutorizationModule,
                menu_module_1.MenuModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [global_variables_1.Globals, user_service_1.UserService, account_service_1.AccountService, finance_service_1.FinanceService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map