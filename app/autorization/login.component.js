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
var account_service_1 = require('../services/account.service');
var LoginComponent = (function () {
    function LoginComponent(accountServcie) {
        this.accountServcie = accountServcie;
    }
    LoginComponent.prototype.login = function (email, password) {
        this.accountServcie.login(email, password);
        console.log(email + " " + password);
    };
    LoginComponent.prototype.goToRegister = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-app',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css'],
            providers: [account_service_1.AccountService]
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map