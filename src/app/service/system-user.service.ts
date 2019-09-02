import { Injectable } from '@angular/core';
import { SystemUser } from '../component/model/systemUser';

@Injectable({
  providedIn: 'root'
})
export class SystemUserService {
  private sysuserList: SystemUser[] =[
    {userFName:'Pritesh',userLName:'Patel',userGender:'Male',userBirthDate: new Date('10/12/1999'),userContact:'201594589',userEmail:'Im@gmail.com'},
    {userFName:'Praganesh',userLName:'Lad',userGender:'Male',userBirthDate: new Date('10/12/1995'),userContact:'9658245585',userEmail:'Im@gmail.com'},
    {userFName:'Ritesh',userLName:'Patil',userGender:'Male',userBirthDate: new Date('10/12/1990'),userContact:'3215285248',userEmail:'ght56@gmail.com'},
    {userFName:'Ankita',userLName:'Pan',userGender:'Female',userBirthDate: new Date('10/12/1996'),userContact:'6259965825',userEmail:'ghfn@gmail.com'},
    {userFName:'Arpita',userLName:'Ghada',userGender:'Female',userBirthDate: new Date('10/12/1991'),userContact:'9658258235',userEmail:'pgh@gmail.com'},
    {userFName:'Ganesh',userLName:'Patel',userGender:'Male',userBirthDate: new Date('10/12/1998'),userContact:'3695865856',userEmail:'abv@hotmail.com'},
  ];
  
  constructor() { }
  getUserList(): SystemUser[]{ return this.sysuserList; }
}
