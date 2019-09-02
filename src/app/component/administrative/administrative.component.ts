import { Component, OnInit } from '@angular/core';
import { SystemUser } from '../model/systemUser';
import { SystemUserService } from 'src/app/service/system-user.service';

@Component({
  selector: 'app-administrative',
  templateUrl: './administrative.component.html',
  styleUrls: ['./administrative.component.css']
})
export class AdministrativeComponent implements OnInit {
  systemUsers: SystemUser[];
  constructor(private _systemuserService: SystemUserService ) { }

  ngOnInit() {
    this.systemUsers = this._systemuserService.getUserList();
    console.log(this.systemUsers);
  }

  //systemUser: SystemUser = { userFName: null,userLName: null,userGender: null,userBirthDate: null, userContact: null,userEmail: null};

  displayAllUser(){};
}
