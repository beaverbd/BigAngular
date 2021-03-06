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
var data_peeker_service_1 = require('../../services/data-peeker.service');
var core_2 = require('@angular/core');
var ManagerComponent = (function (_super) {
    __extends(ManagerComponent, _super);
    function ManagerComponent(dataPeekerSerivce, injector) {
        var _this = this;
        _super.call(this, injector);
        this.dataPeekerSerivce = dataPeekerSerivce;
        dataPeekerSerivce.getCompaniesAsManager(this.accountService.user.Id)
            .subscribe(function (result) { return _this.companies = result; });
    }
    ManagerComponent.prototype.selectCompany = function (company) {
        this.selectedCompany = company;
        this.dataPeekerSerivce.getCompanyProducts(company.Id)
            .subscribe(this.setProducts.bind(this));
    };
    ManagerComponent.prototype.setProducts = function (products) {
        this.products = products;
    };
    ManagerComponent.prototype.selectProduct = function (product) {
        this.selectedProduct = product;
    };
    ManagerComponent.prototype.removeProduct = function (product) {
        console.log(product.Name + " remove");
    };
    ManagerComponent.prototype.addProduct = function (productName) {
    };
    ManagerComponent.prototype.ngOnInit = function () {
    };
    ManagerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'manager',
            templateUrl: 'manager.component.html',
            styleUrls: ['manager.component.css']
        }), 
        __metadata('design:paramtypes', [data_peeker_service_1.DataPeekerService, core_2.Injector])
    ], ManagerComponent);
    return ManagerComponent;
}(global_component_1.GlobalComponent));
exports.ManagerComponent = ManagerComponent;
//# sourceMappingURL=manager.component.js.map