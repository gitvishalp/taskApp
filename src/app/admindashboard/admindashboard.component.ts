import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private http:HttpClient, private route:ActivatedRoute, private router:Router, private adminService:AdminService){

  }
 
  
  activeResponse:any={Data:0}
  pendingResponse:any={Data:0}
  inprogressResponse:any={Data:0}
  completeResponse:any={Data:0}
  activeTaskResponse:any={Data:0}
  pendingTaskResponse:any={Data:0}
  completeTaskResponse:any={Data:0}
  ngOnInit(): void {
    if(this.adminService.isLogined()==false){
     this.router.navigate(['/login'])
    }else{
        this.adminService.dashboardActiveProject().subscribe(res=>{this.activeResponse=res});
        this.adminService.dashboardInprogressProject().subscribe(res=>{this.inprogressResponse=res});
        this.adminService.dashboardPendingProject().subscribe(res=>{this.pendingResponse=res});
        this.adminService.dashBoardCompletedProject().subscribe(res=>{this.completeResponse=res});
        this.adminService.dashboardActiveTask().subscribe(res=>{this.activeTaskResponse=res});
        this.adminService.dashboardPendingTask().subscribe(res=>{this.pendingTaskResponse=res});
        this.adminService.dashboardCompletedTask().subscribe(res=>{this.completeTaskResponse=res})
    }
  }
  activeProject(){
    this.router.navigate(['/project'])
  }
  activeTask(){
    this.router.navigate(['/task'])
  }
}
