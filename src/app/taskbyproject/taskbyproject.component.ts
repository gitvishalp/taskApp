import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-taskbyproject',
  templateUrl: './taskbyproject.component.html',
  styleUrls: ['./taskbyproject.component.css']
})
export class TaskbyprojectComponent implements OnInit {


  constructor(private route:ActivatedRoute,private router:Router, private adminService:AdminService){

  }
  projectId = this.route.snapshot.queryParamMap.get("projectId");
  displayedColumns: string[] = ['id','project','title','description','priority','status','expectedCompletionDate','action'];
  dataSource:any = [];
  deleteResponse:any={}
  ngOnInit(): void {
      this.adminService.getTaskByProject(this.projectId)
      .subscribe((res:any)=>{
          this.dataSource=res.Data
      })
  }
  updateTask(taskId:String){
    this.router.navigate(['/update-task'],{queryParams:{taskId:taskId}});
  }
  removeTask(taskId:String){
     this.adminService.deleteTaskById(taskId)
     .subscribe(res=>{
      this.deleteResponse=res
      if(this.deleteResponse.Status==200){
        this.router.navigate(['/project']);
      }
     })
  }
}
