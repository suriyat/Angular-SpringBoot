import { EmployeeService } from './../employee-service.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
})
export class EmployeelistComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService:EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getAllEmployeeList().subscribe(data => {
this.employees = data;
    });
  }
}
