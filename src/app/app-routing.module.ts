import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaftComponent } from './component/caft/caft.component';
import { MoneyOrderComponent } from './component/money-order/money-order.component';
import { AftreturnComponent } from './component/aftreturn/aftreturn.component';
import { ChequeReturnComponent } from './component/cheque-return/cheque-return.component';
import { AdministrativeComponent } from './component/administrative/administrative.component';
import { UserLoginComponent } from './component/user-login/user-login.component';

const routes: Routes = [
     {path:'caft', component: CaftComponent},
     {path:'moneyOrder', component: MoneyOrderComponent},
     {path:'aftReturn', component: AftreturnComponent},
     {path:'chequeReturn', component: ChequeReturnComponent},
     {path:'adminitrative', component: AdministrativeComponent},
     {path:'userLogin', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
