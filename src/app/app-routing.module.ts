import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerFormComponent } from './manager-form/manager-form.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AccounttypeCreateComponent } from './accounttype-create/accounttype-create.component';
import { EmployeeActionComponent } from './employee-action/employee-action.component';
import { CreateAccountComponent } from './create-account/create-account.component';
 
const routes: Routes = [
  { path: 'managerLogin', component: ManagerLoginComponent },
  { path: 'employeeLogin', component: EmployeeLoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'managerAction', component: ManagerFormComponent },
  { path: 'employeeAction', component: EmployeeActionComponent },
  { path: 'manager/createEmployee', component: EmployeeCreateComponent },
  { path: 'manager/createAccountType', component: AccounttypeCreateComponent },
  { path: 'employee/createAccount', component: CreateAccountComponent },
  { path: 'manager/employeesList', component: EmployeeListComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }