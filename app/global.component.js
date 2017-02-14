"use strict";
var router_1 = require('@angular/router');
var account_service_1 = require('./services/account.service');
var GlobalComponent = (function () {
    function GlobalComponent(injector) {
        this.router = injector.get(router_1.Router);
        this.accountService = injector.get(account_service_1.AccountService);
        if (!this.accountService.user.IsAutorized) {
            this.router.navigate(['/autorization/login']);
        }
        if (this.router.url.includes('manager') && this.accountService.user.Role != 'Manager') {
            this.router.navigate(['/menu/customer']);
        }
    }
    return GlobalComponent;
}());
exports.GlobalComponent = GlobalComponent;
//# sourceMappingURL=global.component.js.map