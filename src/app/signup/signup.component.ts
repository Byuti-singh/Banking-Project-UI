import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Manager } from '../manager_model/manager';
import { RestapiService } from '../restapi.service';
import { ManagerService } from '../service/manager.service';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 
  manager: Manager;
  oldManager: Manager;
  rePassword: string;
  headers: HttpHeaders;
 
  constructor(private router: Router, 
              private managerService: ManagerService,
              private reastapiService: RestapiService) {
    this.manager = new Manager();
  }
 
  onSubmit() {
    const name = "Gyan Chandra Kushwaha";
    const password = "Password@123";
    this.headers = new HttpHeaders({Authorization:'Basic ' +  window.btoa(name+":"+password)});
    this.managerService.findOne(this.manager.name, this.headers).subscribe(data=>{
      this.oldManager = data;
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
    if(this.manager.password == this.rePassword){
      this.managerService.save(this.manager, this.headers).subscribe(result => {
        alert("Data saved successfully");
        this.gotoLoginPage()}
        );
    } else {
      alert("Password mismatch.");
    }
  }
 
  gotoLoginPage() {
    this.router.navigate(['/managerLogin']);
  }
}
