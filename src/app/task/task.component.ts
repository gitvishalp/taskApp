import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {


  constructor(private route:ActivatedRoute,private router:Router, private adminService:AdminService){

  }
  displayedColumns: string[] = ['id','project','title','Assignee','description','priority','status','remark','expectedCompletionDate','action'];
  dataSource:any = [];
  deleteResponse:any={}
  ngOnInit(): void {
      this.adminService.getAllTask()
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
        this.router.navigate(['/task']);
      }
     })
  }
}
