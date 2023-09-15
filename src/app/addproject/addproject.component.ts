import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit{

  response:any={}
constructor(private router:Router, private adminService:AdminService){

}
ngOnInit(): void {
  if(this.adminService.isLogined()==false){
     this.router.navigate(['/login'])
  }
}
  onAddProject(formData:{Title:String,Description:String,ExpectedCompletionDate:Date}){
    console.log(formData);
    this.adminService.addProject(formData)
    .subscribe(res=>{
      this.response=res;
    if(this.response.Status==200){
      this.router.navigate(['/admin-dashboard']) 
    }
    })
  }
}
