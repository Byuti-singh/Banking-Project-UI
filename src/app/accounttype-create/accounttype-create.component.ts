import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounttype } from '../accounttype-model/accounttype';
import { RestapiService } from '../restapi.service';
import { AccounttypeService } from '../service/accounttype.service';

@Component({
  selector: 'app-accounttype-create',
  templateUrl: './accounttype-create.component.html',
  styleUrls: ['./accounttype-create.component.css']
})
export class AccounttypeCreateComponent implements OnInit {

  accounttype: Accounttype;
  accountTypeName: Accounttype;

  constructor(private router: Router,
              private accounttypeService: AccounttypeService,
              private restapiService: RestapiService) { 
    this.accounttype = new Accounttype();
  }

  ngOnInit() {
    
  }

  onSubmit() {
    this.accounttypeService.findOne(this.accounttype.accountTypeName, this.restapiService.getHeader()).subscribe(
      data => {
        if(data != null){
          alert("Account type already exists!");
        } else if(data == null){
          this.onCreate();
        }
      }, error => {
        alert("Unknown error occurred");
      }
    );
  }

  onCreate(){
      this.accounttypeService.save(this.accounttype, this.restapiService.getHeader()).subscribe(result => {
        alert("Account type created successfully");
        this.goToManagerAction();
      });
    }

  goToManagerAction() {
    this.router.navigate(["/managerAction"]);
  }

  onLogout(){
    this.restapiService.setHeader();
    alert("Successfully logged out");
    this.router.navigate(["/managerLogin"]);
  }

}
