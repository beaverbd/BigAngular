import { Injectable } from '@angular/core';

import { User } from '../entity/user'; 

@Injectable()
export class UserService{
    public user:User = new User();
    
}