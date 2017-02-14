"use strict";
var User = (function () {
    function User() {
    }
    User.prototype.toString = function () {
        console.log("First name " + this.firstName + "; LastName " + this.lastName +
            "; Email " + this.email + "; Password " + this.password);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map