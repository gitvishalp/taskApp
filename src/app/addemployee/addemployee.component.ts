import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private router:Router, private adminService:AdminService){

  }
ngOnInit(): void {
   if(localStorage.getItem('isLogin')=='false'){
    this.router.navigate(['/login']);
   }
}
  response:any={}
  onAddEmployee(FormData:{Name:String,Designition:String,DOB:Date,Email:String,PhoneNumber:String,Role:String}){
    console.log(FormData)
    this.isLoading = true;
    this.adminService.AddEmployee(FormData).subscribe(res=>{
    this.response=res;
    if(this.response.Status==200){
      this.isLoading=false;
      this.router.navigate(['/employee'])   
    }
    })
  }
}
