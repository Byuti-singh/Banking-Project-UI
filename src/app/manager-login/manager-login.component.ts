import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Manager } from '../manager_model/manager';
import { ManagerService } from '../service/manager.service';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {

  manager : Manager;

  constructor(private router: Router,
              private restapiService: RestapiService,
              private managerService: ManagerService) { 
                this.manager = new Manager();
              }

  ngOnInit() {

  }

  onSignup(){
    this.router.navigateByUrl("/signup");
  }

  onLogin(){
    this.restapiService.login(this.manager.name, this.manager.password).subscribe(data =>{
      this.router.navigate(["/managerAction"]);

    }, 
    error => {
      alert("Invalid credentials");
    });

  }


}
