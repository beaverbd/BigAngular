import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'customer.component.html',
    styleUrls: ['customer.component.css']
})
export class CustomerComponent{
    constructor(){
        console.log("CUSTOMER CONSTR");
    }
}