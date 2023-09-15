import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EmployeeComponent } from './employee/employee.component';
import { TaskbyemployeeComponent } from './taskbyemployee/taskbyemployee.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'add-employee',component:AddemployeeComponent},
  { path: 'add-project',component:AddprojectComponent},
  { path: 'add-task',component:AddtaskComponent},
  { path:'admin-dashboard',component:AdmindashboardComponent},
  { path:'employee', component:EmployeeComponent},
  {path: 'task-by-employee',component:TaskbyemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
