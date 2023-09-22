import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employeeupdatetask',
  templateUrl: './employeeupdatetask.component.html',
  styleUrls: ['./employeeupdatetask.component.css']
})
export class EmployeeupdatetaskComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private empService:EmployeeServiceService){}
  response:any={}
  ngOnInit(): void {
      if(localStorage.getItem('userLogin')=='false'){
         this.router.navigate(['/login']);
      }
  }
   taskId = this.route.snapshot.queryParamMap.get("taskId");
   empUpdateTask(requestdata:{Status:String,Remarks:String}){
   this.empService.updateTask(requestdata,this.taskId)
   .subscribe(res=>{
    this.response=res;
    console.log(this.response)
    if(this.response.Status==200){
      this.router.navigate(['/emp-task']);
    }
   })
  }
}
