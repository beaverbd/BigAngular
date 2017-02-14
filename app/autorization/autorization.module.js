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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var login_component_1 = require('./login/login.component');
var register_component_1 = require('./register/register.component');
var autorization_routing_module_1 = require('./autorization-routing.module');
var AutorizationModule = (function () {
    function AutorizationModule() {
    }
    AutorizationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                autorization_routing_module_1.AutorizationRoutingModule,
                http_1.HttpModule
            ],
            declarations: [
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AutorizationModule);
    return AutorizationModule;
}());
exports.AutorizationModule = AutorizationModule;
//# sourceMappingURL=autorization.module.js.map