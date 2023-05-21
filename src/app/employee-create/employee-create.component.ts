import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee-model/employee';
import { RestapiService } from '../restapi.service';

import { EmployeeService } from '../service/employee.service';
 
@Component({
  selector: 'app-employeeCreate',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
 
  employee: Employee;
  oldEmployee: Employee;
  header : HttpHeaders;
  rePassword: string;
 
  constructor(private router: Router,
              private employeeService: EmployeeService,
              private restapiService: RestapiService) {
    this.employee = new Employee();
  }

  ngOnInit(){

  }
 
  onSubmit() {
    this.employeeService.findOne(this.employee.name, this.restapiService.getHeader()).subscribe(data=>{
      this.oldEmployee = data;
      if(data != null){
        alert("Name already exists!");
      } else if(data == null){
        this.onSave();
      }
    }, error => {
      alert("Unknown error occurred");
    });
  }

  onSave(){
    if(this.employee.password == this.rePassword){
      this.employeeService.save(this.employee, this.restapiService.getHeader()).subscribe(result => {
        alert("Employee added successfully!");
        this.gotoEmployeesList()}
        );
    } else {
      alert("Password mismatch.");
    }
  }
 
  gotoEmployeesList() {
    this.router.navigate(["/manager/employeesList"]);
  }

  onLogout(){
    this.restapiService.setHeader();
    alert("Successfully logged out!");
    this.router.navigate(["/managerLogin"]);
  }
}

