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
var http_1 = require('@angular/http');
var global_variables_1 = require('./global-variables');
var account_service_1 = require('./account.service');
var FinanceService = (function () {
    function FinanceService(http, globals, accountService) {
        this.http = http;
        this.globals = globals;
        this.accountService = accountService;
    }
    FinanceService.prototype.buyProduct = function (userId, product, count) {
        return this.http
            .post(this.globals.SiteUrl + '/api/Finance/BuyProduct?userId=' + userId + '&prodId=' + product.Id + '&count=' + count, "")
            .map(function (resp) { return resp.json(); });
    };
    FinanceService.prototype.deposit = function (money) {
        var _this = this;
        return this.http
            .post(this.globals.SiteUrl + '/api/Finance/Deposit?userId=' + this.accountService.user.Id + '&money=' + money, "")
            .map(function (resp) {
            if (resp.json()) {
                _this.accountService.user.Money += +money;
            }
            return resp.json();
        });
    };
    FinanceService.prototype.getUserMoney = function () {
        var _this = this;
        return this.http
            .get(this.globals.SiteUrl + '/api/Finance/GetUserMoney?userId=' + this.accountService.user.Id)
            .map(function (resp) {
            _this.accountService.user.Money = +resp.json();
            return resp.json();
        });
    };
    FinanceService.prototype.getUserPurchasesHistory = function () {
        return this.http
            .get(this.globals.SiteUrl + '/api/Finance/GetPurchaseHistory?userId=' + this.accountService.user.Id)
            .map(function (resp) {
            return resp.json();
        });
    };
    FinanceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, global_variables_1.Globals, account_service_1.AccountService])
    ], FinanceService);
    return FinanceService;
}());
exports.FinanceService = FinanceService;
//# sourceMappingURL=finance.service.js.map