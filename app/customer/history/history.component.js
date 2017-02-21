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
var finance_service_1 = require('../../services/finance.service');
var HistoryComponent = (function () {
    function HistoryComponent(financeService) {
        this.financeService = financeService;
        this.financeService.getUserPurchasesHistory()
            .subscribe(this.setHistory.bind(this));
    }
    HistoryComponent.prototype.setHistory = function (newHistory) {
        this.history = newHistory;
    };
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'history.component.html',
            styleUrls: ['history.component.css']
        }), 
        __metadata('design:paramtypes', [finance_service_1.FinanceService])
    ], HistoryComponent);
    return HistoryComponent;
}());
exports.HistoryComponent = HistoryComponent;
//# sourceMappingURL=history.component.js.map