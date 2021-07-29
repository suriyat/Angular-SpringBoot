import { EmployeelistComponent } from './employeelist/employeelist.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {path:'employees', component:EmployeelistComponent},
{path:'createEmployee', component: CreateEmployeeComponent},
{path:'', redirectTo:"employees", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
