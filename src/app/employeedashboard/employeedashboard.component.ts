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
    if(localStorage.getItem('userLogin')=='false'){
      this.router.navigate(['/login'])
    }else{
        this.employeeService.getActiveTask().subscribe(res=>{
          this.activeTask=res
          if(this.activeTask.Data==null){
            this.activeTask.Data=0;
          }
        });
        this.employeeService.getPendingTask().subscribe(res=>{
          this.pendingTask=res
          if(this.pendingTask.Data==null){
            this.pendingTask.Data=0;
          }
        });
        this.employeeService.getInprogresstask().subscribe(res=>{
          this.inprogressTask=res
        if(this.inprogressTask.Data==null){
          this.inprogressTask.Data=0;
        } 
        });
        this.employeeService.getCompletedTask().subscribe(res=>{
         this.completedTask=res
        if(this.completedTask.Data==null) {
          this.completedTask.Data=0;
        }
        });
        this.employeeService.getProjectCount().subscribe(res=>{
          this.projectResponse=res
          if(this.projectResponse.Data==null){
            this.projectResponse.Data=0;
          }
        });
       }
   }
}
