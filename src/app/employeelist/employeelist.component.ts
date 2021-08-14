import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../employee-service.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
})
export class EmployeelistComponent implements OnInit {
  id:number;

  employees: Employee[];
  constructor(private employeeService:EmployeeService, private router:Router, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getAllEmployeeList().subscribe(data => {
this.employees = data;
    });
  }

  updateEmployee(id: number){
    this.router.navigate(['updateEmployee',id]);

  }
  deleteEmployee(id:any){
    this.employeeService.deleteEmplyoyee(id).subscribe(data => console.log("Deleted Sucessfully"))

  }

}
