import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestapiService {

  headers : HttpHeaders;

  constructor(private http: HttpClient) { }

  public login(name:string, password: string){
    this.headers = new HttpHeaders({Authorization:'Basic ' +  window.btoa(name+":"+password)});
    return this.http.get<any>(`http://localhost:8080/api/v1/login`, {headers: this.headers});
  }

  public getHeader(){
    return this.headers;
  }

  public setHeader(){
    this.headers = null;
    return this.headers;
  }

}
