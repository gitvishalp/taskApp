import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-taskbyemployee',
  templateUrl: './taskbyemployee.component.html',
  styleUrls: ['./taskbyemployee.component.css']
})
export class TaskbyemployeeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router, private adminService:AdminService){

  }
  empId = this.route.snapshot.queryParamMap.get("employeeId");
  displayedColumns: string[] = ['id','project','title','description','priority','status','expectedCompletionDate','action'];
  dataSource:any = [];
  deleteResponse:any={}
  ngOnInit(): void {
      this.adminService.getTaskByEmployee(this.empId)
      .subscribe((res:any)=>{
          this.dataSource=res.Data
      })
  }
  removeTask(taskId:String){
     this.adminService.deleteTaskById(taskId)
     .subscribe(res=>{
      this.deleteResponse=res
      if(this.deleteResponse.Status==200){
        this.router.navigate(['/employee']);
      }
     })
  }
}
