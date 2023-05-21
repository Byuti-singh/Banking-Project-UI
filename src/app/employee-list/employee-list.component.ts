import { HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee-model/employee';
import { RestapiService } from '../restapi.service';

import { EmployeeService } from '../service/employee.service';
 
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 
  employees: Employee[];
 
  constructor(private employeeService: EmployeeService, 
              private restapiService: RestapiService,
              private router: Router) {
  }
 
  ngOnInit() {
    this.employeeService.findAll(this.restapiService.getHeader()).subscribe(data => {
      this.employees = data;
    });
  }

  onLogout(){
    this.restapiService.setHeader();
    alert("Successfully logged out");
    this.router.navigate(["/managerLogin"]);
  }
}
