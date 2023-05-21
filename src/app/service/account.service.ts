import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../account-model/account';
 
@Injectable()
export class AccountService {
 
  private accountUrl: string;
  private getAccountUrl: string;

 
  constructor(private http: HttpClient) {
    this.accountUrl = 'http://localhost:8080/api/v1/employee/createAccount';
    this.getAccountUrl = 'http://localhost:8080/api/v1/account/';
  }

  public findOne(mobileNumber: Number, header: HttpHeaders){
    return this.http.get<Account>(this.getAccountUrl + mobileNumber, {headers: header});
  }

  public save(account: Account, header: HttpHeaders) {
    return this.http.post<Account>(this.accountUrl, account, {headers: header});
  }
 
}