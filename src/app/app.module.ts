import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerFormComponent } from './manager-form/manager-form.component';
import { ManagerService } from './service/manager.service';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './service/employee.service';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AccounttypeCreateComponent } from './accounttype-create/accounttype-create.component';
import { AccounttypeService } from './service/accounttype.service';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EmployeeActionComponent } from './employee-action/employee-action.component';
import { AccountService } from './service/account.service';
import { RestapiService } from './restapi.service';
 
@NgModule({
  declarations: [
    AppComponent,
    ManagerFormComponent,
    ManagerLoginComponent,
    SignupComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeLoginComponent,
    AccounttypeCreateComponent,
    CreateAccountComponent,
    EmployeeActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ManagerService, EmployeeService, AccounttypeService, AccountService, RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }