import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {

isLoading:boolean = false;
project:any=[]
assignee:any=[]
response:any={}

constructor(private router:Router, private route:ActivatedRoute, private adminService:AdminService){

}
taskId= this.route.snapshot.queryParamMap.get("taskId");
ngOnInit(): void {
  if(localStorage.getItem('isLogin')=='false'){
    this.router.navigate(['/login']);
   }else{
       this.adminService.getAllEmployee().subscribe((res:any)=>{
       this.assignee=res.Data
      });
    }
}
onUpdateTask(formdata:{AssigneeId:String,ExpectedCompletion:Date,Status:String,Priority:String,Remarks:String}){
  console.log(formdata)
  this.isLoading=true;
 this.adminService.updateTask(formdata,this.taskId)
 .subscribe(res=>{
  this.response=res
  if(this.response.Status==200){
    this.isLoading=false;
    this.router.navigate(['/task'])
  }
 })
}
}
