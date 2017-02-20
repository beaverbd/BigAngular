import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AutorizationModule } from './autorization/autorization.module';
import { MenuModule } from './menu/menu.module';
import { CustomerModule } from './customer/customer.module';

import { AccountService } from './services/account.service';
import { FinanceService } from './services/finance.service';
import { Globals} from './services/global-variables';
import { UserService } from './services/user.service';
import { DataPeekerService} from './services/data-peeker.service';

@NgModule({
  imports: [
    AppRoutingModule,
    AutorizationModule,
    MenuModule,
    CustomerModule,
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ Globals, UserService, AccountService, FinanceService,DataPeekerService ]
})
export class AppModule { }