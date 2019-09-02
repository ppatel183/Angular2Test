import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLogIn } from '../model/user-log-in';
import { UserLoginService } from 'src/app/service/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  
  constructor(private _userloginService: UserLoginService) {
  }

  ngOnInit(): void {
    console.log('on init!!');
  }

  userLogin: UserLogIn = {
    userId: null,
    uPassword: null
  };
  verifyLogin() {
    let verify =  this._userloginService.verifyUser(this.userLogin);
    
    console.log("=>" , verify)
  };
}
