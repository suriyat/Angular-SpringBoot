import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

baseURL= "http://localhost:8080/api/v1/getAllEmployess";
postURL= "http://localhost:8080/api/v1/createEmployee"

  constructor(public http:HttpClient) { }

  getAllEmployeeList():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseURL);
  }

  createEmployee(employee: Employee):Observable<any>{
      return this.http.post(this.postURL,employee);
  }
}
