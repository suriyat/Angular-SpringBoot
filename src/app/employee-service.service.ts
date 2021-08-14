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
putURL= "http://localhost:8080/api/v1/updateEmployee/{id}";
getById="http://localhost:8080/api/v1/findEmployee/";
alterEmp = "http://localhost:8080/api/v1/updateEmployee/";
delete="http://localhost:8080/api/v1/deleteEmployee";
  constructor(public http:HttpClient) { }

  getAllEmployeeList():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseURL);
  }

  createEmployee(employee: Employee):Observable<any>{
      return this.http.post(this.postURL,employee);
  }

  getEmployeeId(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.getById}/${id}`);

  }
  updateEmployee(id:number, employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.alterEmp}/${id}`,employee);
  }
  deleteEmplyoyee(id:number):Observable<Object>{
    return this.http.delete<Object>(`${this.delete}/${id}`);
  }
}
