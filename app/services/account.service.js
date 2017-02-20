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
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var global_variables_1 = require('./global-variables');
var user_1 = require('../entity/user');
var AccountService = (function () {
    function AccountService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.user = new user_1.User();
        this.subject = new Rx_1.BehaviorSubject(this.user);
    }
    AccountService.prototype.login = function (email, password) {
        var _this = this;
        return this.http
            .get(this.globals.SiteUrl + '/api/Account/Login?email=' + email + '&password=' + password)
            .map(function (data) {
            _this.userLogin(data.json());
            _this.user = data.json();
            return _this.user.IsAutorized;
        });
    };
    AccountService.prototype.register = function (user) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        var reqStr = this.globals.SiteUrl + '/api/Account/RegisterCustomer';
        return this.http
            .post(reqStr, JSON.stringify(user), { headers: headers })
            .subscribe(function (data) {
            _this.user = data.json();
            _this.userLogin(_this.user);
        }, function (error) { return console.log(error); });
    };
    AccountService.prototype.userLogin = function (user) {
        this.subject.next(this.user);
    };
    AccountService.prototype.loginStatusChanged = function () {
        return this.subject.asObservable();
    };
    AccountService.prototype.getLoginStatus = function () {
        return this.user.IsAutorized;
    };
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, global_variables_1.Globals])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map