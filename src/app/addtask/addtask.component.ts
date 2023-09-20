import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

project:any=[]
assignee:any=[]
response:any={}
constructor(private router:Router, private adminService:AdminService){

}
ngOnInit(): void {
  if(localStorage.getItem('isLogin')=='false'){
    this.router.navigate(['/login']);
   }else{
    this.adminService.getAllProject().subscribe((res:any)=>{
      this.project=res.Data
    })
    this.adminService.getAllEmployee().subscribe((res:any)=>{
     this.assignee=res.Data
    });
   }
}
onAddTask(formdata:{Title:String,Description:String,ProjectId:String,Priority:String,AssigneeId:String,ExpectedCompletion:Date}){
 console.log(formdata)
 this.adminService.addTask(formdata)
 .subscribe(res=>{
  this.response=res
  if(this.response.Status==200){
    this.router.navigate(['/admin-dashboard'])
  }
 })
}

  
}
