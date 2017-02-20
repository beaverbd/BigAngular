"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var global_component_1 = require('../../global.component');
var core_2 = require('@angular/core');
var finance_service_1 = require('../../services/finance.service');
var DepositComponent = (function (_super) {
    __extends(DepositComponent, _super);
    function DepositComponent(financeService, injector) {
        _super.call(this, injector);
        this.financeService = financeService;
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
            templateUrl: 'deposit.component.html',
            styleUrls: ['deposit.component.css']
        }), 
        __metadata('design:paramtypes', [finance_service_1.FinanceService, core_2.Injector])
    ], DepositComponent);
    return DepositComponent;
}(global_component_1.GlobalComponent));
exports.DepositComponent = DepositComponent;
//# sourceMappingURL=deposit.component.js.map