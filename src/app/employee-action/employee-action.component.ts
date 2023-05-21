import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-employee-action',
  templateUrl: './employee-action.component.html',
  styleUrls: ['./employee-action.component.css']
})
export class EmployeeActionComponent implements OnInit {

  constructor(private router: Router,
              private restapiService: RestapiService) { }

  ngOnInit() {
  }

  onCreateAccount(){
    this.router.navigate(["/employee/createAccount"]);
  }

  onLogout(){
    this.restapiService.setHeader();
    alert("Successfully logged out");
    this.router.navigate(["/employeeLogin"]);
  }

}
