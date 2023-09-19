import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employeetask',
  templateUrl: './employeetask.component.html',
  styleUrls: ['./employeetask.component.css']
})
export class EmployeetaskComponent implements OnInit{

  displayedColumns: string[] = ['id','project','title','description','priority','status','remark','expectedCompletionDate','action'];
  dataSource:any = [];
  constructor(private router:Router, private empService:EmployeeServiceService){}
  ngOnInit(): void {
    if(this.empService.isLogined()==false){
      this.router.navigate(['/login']);
    }
      this.empService.getEmpAllTask()
      .subscribe((res:any)=>{
        this.dataSource=res.Data
      })
  }
  updateTask(taskId:String){
    this.router.navigate(['/update-task'],{queryParams:{taskId:taskId}});
  }
}
