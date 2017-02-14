"use strict";
var testing_1 = require('@angular/core/testing');
var manager_component_1 = require('./manager.component');
describe('a manager component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                manager_component_1.ManagerComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([manager_component_1.ManagerComponent], function (ManagerComponent) {
        component = ManagerComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=manager.component.spec.js.map