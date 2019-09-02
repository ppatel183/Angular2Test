import { Injectable } from '@angular/core';

import { UserLogIn } from '../component/model/user-log-in';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private userList: UserLogIn[] =[
    {userId:'Ppatel183',uPassword:'Im@ge90!'},
    {userId:'Gpatel183',uPassword:'Im@ge91!'},
  ];
  constructor() { }

  verifyUser(user: UserLogIn){
    console.log("verifyuser",this.userList.find(x => x.userId == user.userId && x.uPassword == user.uPassword),user);
    if (this.userList.find(x => x.userId == user.userId && x.uPassword == user.uPassword) != null) {
       return true;
    } else {
      return false;
    }   
    
  }
}
