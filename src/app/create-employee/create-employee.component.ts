import { Router, RouterModule } from '@angular/router';
import { EmployeeService } from './../employee-service.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.createEmployee();
  }

createEmployee(){
this.employeeService.createEmployee(this.employee).subscribe(data => {console.log(data)});
this.navigate();
}

navigate(){
  this.router.navigate(['/employees']);
}
}
