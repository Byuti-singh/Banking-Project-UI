import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accounttype } from '../accounttype-model/accounttype';

@Injectable()
export class AccounttypeService {
 
  private AccountTypesListUrl: string;
  private AccountTypeUrl: string;
  private getAccountTypeUrl: string;
 
  constructor(private http: HttpClient) {
    this.AccountTypesListUrl = 'http://localhost:8080/api/v1/allAccountTypes';
    this.AccountTypeUrl = 'http://localhost:8080/api/v1/manager/addAccountType';
    this.getAccountTypeUrl = 'http://localhost:8080/api/v1/accountType/';
  }
 
  public findAll(header: HttpHeaders): Observable<Accounttype[]> {
    return this.http.get<Accounttype[]>(this.AccountTypesListUrl, {headers: header});
  }

  public findOne(name: string, header: HttpHeaders){
    return this.http.get<Accounttype>(this.getAccountTypeUrl + name, {headers: header});
  }
 
  public save(accountType: Accounttype, header: HttpHeaders) {
    return this.http.post<Accounttype>(this.AccountTypeUrl, accountType, {headers: header});
  }

}