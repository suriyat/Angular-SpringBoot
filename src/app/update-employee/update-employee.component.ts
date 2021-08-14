import { EmployeeService } from './../employee-service.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  public id:number;
  public employee: Employee = new Employee
  constructor(private route:Router, private employeeService:EmployeeService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.activeRoute.snapshot.params['id'];
    this.employeeService.getEmployeeId(this.id).subscribe(data => {
      this.employee=data;
    });
  }

  updateEmployee(id:number, employee:any){
    this.id = id;
    this.employeeService.updateEmployee(id,this.employee).subscribe(data =>{
      console.log(data);
      this.route.navigate(['employees']);
    });


  }

}
