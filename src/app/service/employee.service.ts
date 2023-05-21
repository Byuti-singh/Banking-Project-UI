import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee-model/employee';

@Injectable()
export class EmployeeService {
 
  private employeesUrl: string;
  private employeeUrl: string;
  private getEmployeeUrl: string;
 
  constructor(private http: HttpClient) {
    this.employeesUrl = 'http://localhost:8080/api/v1/manager/employeesList';
    this.employeeUrl = 'http://localhost:8080/api/v1/manager/addEmployee';
    this.getEmployeeUrl = 'http://localhost:8080/api/v1/manager/employee/';
  }

  public findAll(header: HttpHeaders): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl, {headers: header});
  }

  public findOne(name:string, header: HttpHeaders){
    return this.http.get<Employee>(this.getEmployeeUrl + name, {headers: header});
  }

  public save(employee: Employee, header: HttpHeaders) {
    return this.http.post<Employee>(this.employeeUrl, employee, {headers: header});
  }
 
}