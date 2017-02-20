import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { Router} from '@angular/router';
import { User } from './entity/user';

@Component({
    moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css'] 
})
export class AppComponent implements OnInit {

  title:string = 'Product Service';
  user:User;
  constructor(private accountservice:AccountService,
  private router:Router){    
  }

  ngOnInit(){
    this.user = this.accountservice.user;
    this.accountservice.loginStatusChanged()
    .subscribe(this.loginChanged.bind(this));
  }

  loginChanged(user:User):void{
      this.user = user;
      if(user.IsAutorized)
      {        
        if(user.Role == 'Customer')
          this.router.navigate(['/menu/customer']);
        else if(user.Role=="Manager")
          this.router.navigate(['/menu/manager']);

      }
  }

  logOut(){
    this.user.IsAutorized = false;
    this.accountservice.user.IsAutorized = false;
  }
}