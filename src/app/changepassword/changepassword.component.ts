import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute,private employeeService:EmployeeServiceService){

  }
  ngOnInit(): void {
      if(this.employeeService.isLogined()==false){
        this.router.navigate(['/login'])
      }
  }
  changeResponse:any={}
  requestBody:any={}
  onchangePass(formData:{NewPass:String,ConfPass:String}){
    if(formData.NewPass === formData.ConfPass){
     this.requestBody.NewPass = formData.NewPass;
      this.employeeService.changePassword(this.requestBody)
      .subscribe(res=>{
        this.changeResponse=res
        if(this.changeResponse.Status==200){
          this.router.navigate(['/employee-dashboard']);
        }
      })
    }else{
      this.changeResponse.Message = 'Confirm Password is not Same!'
    }
  }
}
