import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {

   constructor(private employeeService:EmployeeServiceService,private router:Router){}

  projectResponse:any={}
  activeTask:any={}
  inprogressTask:any={}
  pendingTask:any={}
  completedTask:any={}
   ngOnInit(): void {
       if(this.employeeService.isLogined()==false){
        this.router.navigate(['/login'])
       }else{
        this.employeeService.getActiveTask().subscribe(res=>{this.activeTask=res});
        this.employeeService.getPendingTask().subscribe(res=>{this.pendingTask=res});
        this.employeeService.getInprogresstask().subscribe(res=>{this.inprogressTask=res});
        this.employeeService.getCompletedTask().subscribe(res=>{this.completedTask=res});
        this.employeeService.getProjectCount().subscribe(res=>{this.projectResponse=res});
       }
   }
}
