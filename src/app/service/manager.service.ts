import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manager } from '../manager_model/manager';
import { RestapiService } from '../restapi.service';
 
@Injectable()
export class ManagerService {
 
  private managersUrl: string;
  private managerUrl: string;
  private getManagerUrl: string;
 
  constructor(private http: HttpClient) {
    this.managersUrl = 'http://localhost:8080/api/v1/managers';
    this.managerUrl = 'http://localhost:8080/api/v1/manager';
    this.getManagerUrl = 'http://localhost:8080/api/v1/manager/';
  }
 
  public save(manager: Manager, header: HttpHeaders) {
    return this.http.post<Manager>(this.managerUrl, manager, {headers: header});
  }

  public findAll(header: HttpHeaders){
    return this.http.get<any>(this.managersUrl, {headers: header});
  }

  public findOne(name:string, header: HttpHeaders){
    return this.http.get<Manager>(this.getManagerUrl + name, {headers: header});
  }

}