import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  adminLogin=false;
  userLogin=true;
  constructor(private router:Router, private http:HttpClient,private adminService:AdminService,private employeeService:EmployeeServiceService){

  }

  loginresponse:any={}
  emploginresponse:any={}
  onAdminLogin(formData:{UserName:String,Password:String}){
    this.adminService.adminLogin(formData)
    .subscribe(res=>{
      this.loginresponse=res
      if(this.loginresponse.Status===200){
       this.router.navigate(['/admin-dashboard'])
      }
      console.log(this.loginresponse)
    })
  }
  onUserLogin(FormData:{Email:String,Password:String}){
    this.employeeService.employeeLogin(FormData)
    .subscribe(res=>{
      this.emploginresponse=res
      if(this.emploginresponse.Status==200){
        if(this.emploginresponse.Data.FirstLogin==true){
          this.router.navigate(['/change-password'])
        }else{
          this.router.navigate(['/employee-dashboard'])
        }
      }
      console.log(this.emploginresponse);
    })
  }
  adminLoginBox(){
    this.adminLogin=true;
    this.userLogin=false;
  }
  userLoginBox(){
    this.adminLogin=false;
    this.userLogin=true;
  }
}
