import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { CaftComponent } from './component/caft/caft.component';
import { AftreturnComponent } from './component/aftreturn/aftreturn.component';
import { ChequeReturnComponent } from './component/cheque-return/cheque-return.component';
import { MoneyOrderComponent } from './component/money-order/money-order.component';
import { AdministrativeComponent } from './component/administrative/administrative.component';
import { FormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserLoginService } from './service/user-login.service'
import { SystemUserService } from './service/system-user.service'

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    CaftComponent,
    MoneyOrderComponent,
    AftreturnComponent,
    ChequeReturnComponent,
    AdministrativeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [UserLoginService,SystemUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
