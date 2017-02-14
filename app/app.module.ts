import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Globals} from './services/global-variables';
import { UserService } from './services/user.service';

import { AutorizationModule } from './autorization/autorization.module';
import { MenuModule } from './menu/menu.module';
import { AccountService } from './services/account.service';
import { FinanceService } from './services/finance.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutorizationModule,
    MenuModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ Globals, UserService, AccountService, FinanceService ]
})
export class AppModule { }