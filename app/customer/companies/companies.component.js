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
var data_peeker_service_1 = require('../../services/data-peeker.service');
var account_service_1 = require('../../services/account.service');
var finance_service_1 = require('../../services/finance.service');
var CompaniesComponent = (function () {
    function CompaniesComponent(dataPeekerService, financeservice, accountService) {
        var _this = this;
        this.dataPeekerService = dataPeekerService;
        this.financeservice = financeservice;
        this.accountService = accountService;
        this.count = 0;
        this.inProgress = false;
        this.dataPeekerService.getCompanies()
            .subscribe(function (result) {
            console.log("!!!");
            _this.companies = result;
        });
    }
    CompaniesComponent.prototype.selectCompany = function (company) {
        this.result = null;
        this.buyingProduct = null;
        this.selectedCompany = company;
        this.dataPeekerService.getCompanyProducts(company.Id)
            .subscribe(this.setProducts.bind(this));
    };
    CompaniesComponent.prototype.selectProduct = function (product) {
        this.buyingProduct = product;
        this.result = null;
    };
    CompaniesComponent.prototype.confirmBuying = function (count) {
        if (count > this.buyingProduct.Count) {
            this.result = "In stock Product is not enough";
            return;
        }
        else if (count * this.buyingProduct.Price > this.accountService.user.Money) {
            this.result = "Not enought money";
            return;
        }
        else {
            this.inProgress = true;
            this.result = null;
        }
        this.count = count;
        this.financeservice.buyProduct(this.accountService.user.Id, this.buyingProduct, count)
            .subscribe(this.buyResult.bind(this));
    };
    CompaniesComponent.prototype.setProducts = function (products) {
        this.products = products;
    };
    CompaniesComponent.prototype.buyResult = function (result) {
        if (result) {
            this.buyingProduct.Count -= this.count;
            this.result = "Success";
            this.count = 0;
        }
        else {
            this.result = "Rejected";
        }
        this.inProgress = false;
    };
    CompaniesComponent.prototype.ngOnInit = function () {
    };
    CompaniesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'companies.component.html',
            styleUrls: ['companies.component.css']
        }), 
        __metadata('design:paramtypes', [data_peeker_service_1.DataPeekerService, finance_service_1.FinanceService, account_service_1.AccountService])
    ], CompaniesComponent);
    return CompaniesComponent;
}());
exports.CompaniesComponent = CompaniesComponent;
//# sourceMappingURL=companies.component.js.map