import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee-model/employee';
import { EmployeeService } from '../service/employee.service';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  employee: Employee; 

  constructor(private employeeService: EmployeeService, 
              private restapiService: RestapiService,
              private router: Router) { 
   this.employee = new Employee()
  }

  ngOnInit() {
  }

  onSubmit(){
    this.restapiService.login(this.employee.name, this.employee.password).subscribe(data =>{
      this.router.navigate(["/employeeAction"]);
    }, 
    error => {
      alert("Invalid credentials");
    });

  }

}
