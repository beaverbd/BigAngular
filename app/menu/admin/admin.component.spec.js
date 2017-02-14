"use strict";
var testing_1 = require('@angular/core/testing');
var admin_component_1 = require('./admin.component');
describe('a admin component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                admin_component_1.AdminComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([admin_component_1.AdminComponent], function (AdminComponent) {
        component = AdminComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=admin.component.spec.js.map