import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account-model/account';
import { Accounttype } from '../accounttype-model/accounttype';
import { RestapiService } from '../restapi.service';
import { AccountService } from '../service/account.service';
import { AccounttypeService } from '../service/accounttype.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: Account;
  accountTypesList: Accounttype[];
  accTypes: Accounttype[];

  constructor(private restapiService: RestapiService,
              private router: Router,
              private accounttypeService: AccounttypeService,
              private accountService: AccountService) {
    this.account = new Account();
  }

  ngOnInit() {
     this.accounttypeService.findAll(this.restapiService.getHeader()).subscribe(
      data => {
        this.accTypes = data;
      }
    );
  }

  onSelectOptions($event: any){
    this.account.accountType = $event.target.value;
  }

  onSubmit(){
    this.accountService.findOne(this.account.mobileNumber, this.restapiService.getHeader()).subscribe(data => {
      if(data != null){
        alert("Account already exists");
      } else if(data == null){
        this.onSave();
      }
    }, error => {
      alert('Unknown error occurred!');
    }
    );
  }

  onSave() {
    this.account.accountNumber = +("5748" + this.account.mobileNumber);
    this.accountService.save(this.account, this.restapiService.getHeader()).subscribe(result => {;
      alert("Customer added successfully");;
      this.gotoEmployeePage()}
      );
  }
 
  gotoEmployeePage() {
    this.router.navigate(["/employeeAction"]);
  }

  onLogout(){
    this.restapiService.setHeader();
    alert("Successfully logged out");
    this.router.navigate(["/employeeLogin"]);
  }
  
}
