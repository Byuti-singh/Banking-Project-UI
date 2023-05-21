import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestapiService } from '../restapi.service';
 
@Component({
  selector: 'app-manager-form',
  templateUrl: './manager-form.component.html',
  styleUrls: ['./manager-form.component.css']
})
export class ManagerFormComponent implements OnInit {
 
  constructor(private router: Router, private restapiService: RestapiService) {}

  ngOnInit(){

  }

  onCreateEmployee(){
    this.router.navigateByUrl("/manager/createEmployee");
  }

  onCreateAccounttype(){
    this.router.navigateByUrl("/manager/createAccountType");
  }

  onLogout(){
    this.restapiService.setHeader();
    alert("Successfully logged out");
    console.log(this.restapiService.setHeader());
    this.router.navigate(["/managerLogin"]);
  }
 
}
