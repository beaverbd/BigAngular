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
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var global_variables_1 = require('./global-variables');
var DataPeekerService = (function () {
    function DataPeekerService(globals, http) {
        this.globals = globals;
        this.http = http;
    }
    DataPeekerService.prototype.getCompanies = function () {
        return this.http.get(this.globals.SiteUrl + '/api/Data/GetCompanies')
            .map(function (result) {
            return result.json();
        })
            .catch(function (error) { return new Observable_1.Observable(); });
    };
    DataPeekerService.prototype.getCompaniesAsManager = function (managerId) {
        return this.http
            .get(this.globals.SiteUrl + '/api/Data/GetManagersCompanies?userId=' + managerId)
            .map(function (result) { return result.json(); });
    };
    DataPeekerService.prototype.getCompanyProducts = function (companyId) {
        return this.http
            .get(this.globals.SiteUrl + '/api/Data/GetCompanyProducts?companyId=' + companyId)
            .map(function (result) {
            return result.json();
        })
            .catch(function (error) { return new Observable_1.Observable(); });
    };
    DataPeekerService.prototype.createProduct = function (productName, companyId, productPrice) {
        return this.http
            .post(this.globals.SiteUrl + '/api/Data/CreateProduct?productName=' + productName + '&companyId=' + companyId + '&productPrice=' + productPrice, "")
            .map(function (result) { return result.json(); });
    };
    DataPeekerService.prototype.changeCompany = function (companyId, companyName, companyDescription) {
        return this.http
            .post(this.globals.SiteUrl + '/api/Data/ChangeCompany?Id=' + companyId + '&Name=' + companyName + '&description=' + companyDescription, "")
            .map(function (result) { return result.json(); });
    };
    DataPeekerService.prototype.removeProduct = function (productId) {
        return this.http
            .post(this.globals.SiteUrl + '/api/Data/RemoveProduct?Id=' + productId, "")
            .map(function (result) { return result.json(); });
    };
    DataPeekerService.prototype.addProductDelivery = function (productId, count, title) {
        return this.http
            .post(this.globals.SiteUrl + '/api/Data/ProductDelivery?Id=' + productId + '&count=' + count + '&title=' + title, "")
            .map(function (result) { return result.json(); });
    };
    DataPeekerService.prototype.changeProduct = function (productId, name, price) {
        return this.http
            .post(this.globals.SiteUrl + '/api/Data/ChangeProduct?Id=' + productId + '&name=' + name + '&price=' + price, "")
            .map(function (result) { return result.json(); });
    };
    DataPeekerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [global_variables_1.Globals, http_1.Http])
    ], DataPeekerService);
    return DataPeekerService;
}());
exports.DataPeekerService = DataPeekerService;
//# sourceMappingURL=data-peeker.service.js.map