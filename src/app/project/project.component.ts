import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  displayedColumns: string[] = ['id','name', 'description', 'status','task','Action'];
  dataSource:any = [];
  sno=1;
  deleteResponse:any={}
 constructor(private adminService:AdminService, private router:Router){

 }
 ngOnInit(): void {
     if(this.adminService.isLogined()==false){
     this.router.navigate(['/login'])
     }else{
      this.adminService.getAllProject()
      .subscribe((res:any)=>{
        this.dataSource=res.Data
      })
     }
 }
 gettask(projectId:String){
  this.router.navigate(['/task-by-project'],{queryParams:{projectId:projectId}});
 }
  removeProject(projectId:String){
    this.adminService.deleteProject(projectId)
    .subscribe(res=>{
    this.deleteResponse=res
    if(this.deleteResponse.Status==200){
      this.router.navigate(['/project'])
    }
    })
  }
}
