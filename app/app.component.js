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
var account_service_1 = require('./services/account.service');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(accountservice, router) {
        this.accountservice = accountservice;
        this.router = router;
        this.title = 'Product Service';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user = this.accountservice.user;
        this.accountservice.getLoginStatus()
            .subscribe(this.loginChanged.bind(this));
    };
    AppComponent.prototype.loginChanged = function (user) {
        this.user = user;
        if (user.IsAutorized) {
            if (user.Role == 'Customer')
                this.router.navigate(['/menu/customer']);
            else if (user.Role == "Manager")
                this.router.navigate(['/menu/manager']);
        }
    };
    AppComponent.prototype.logOut = function () {
        this.user.IsAutorized = false;
        this.accountservice.user.IsAutorized = false;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map