import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  adminLogin=true;
  userLogin=false;
  constructor(private router:Router, private http:HttpClient,private adminService:AdminService){

  }

  loginresponse:any={}
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
  onUserLogin(FormData:{Usernaem:String,Password:String}){
    console.log(FormData);
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
