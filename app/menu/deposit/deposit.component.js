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
var account_service_1 = require('../../services/account.service');
var finance_service_1 = require('../../services/finance.service');
var DepositComponent = (function () {
    function DepositComponent(financeService, accountService) {
        this.financeService = financeService;
        this.accountService = accountService;
        this.deposited = false;
        this.inProgress = false;
        this.amount = 0;
        financeService.getUserMoney()
            .subscribe(this.setMoney.bind(this));
    }
    DepositComponent.prototype.deposit = function (amount) {
        this.deposited = false;
        this.inProgress = true;
        this.financeService.deposit(amount)
            .subscribe(this.depositResult.bind(this));
    };
    DepositComponent.prototype.depositResult = function (result) {
        if (result) {
            this.currentAmount = this.accountService.user.Money;
            this.result = "Successfully";
        }
        else {
            this.result = "Rejected";
        }
        this.deposited = true;
        this.inProgress = false;
    };
    DepositComponent.prototype.setMoney = function (amount) {
        this.currentAmount = amount;
    };
    DepositComponent.prototype.ngOnInit = function () {
    };
    DepositComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'deposit',
            templateUrl: 'deposit.component.html',
            styleUrls: ['deposit.component.css']
        }), 
        __metadata('design:paramtypes', [finance_service_1.FinanceService, account_service_1.AccountService])
    ], DepositComponent);
    return DepositComponent;
}());
exports.DepositComponent = DepositComponent;
//# sourceMappingURL=deposit.component.js.map