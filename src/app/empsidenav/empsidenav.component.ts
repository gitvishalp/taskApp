import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empsidenav',
  templateUrl: './empsidenav.component.html',
  styleUrls: ['./empsidenav.component.css']
})
export class EmpsidenavComponent implements OnInit {

constructor(private router:Router, private EmpService:EmployeeServiceService){}
employee:any={}
ngOnInit(): void {
  if(this.EmpService.isLogined()==false){
    this.router.navigate(['/login'])
  }
    this.EmpService.getEmployeeDetails()
    .subscribe(res=>{
      this.employee=res
    })
}
  logout(){
  this.EmpService.islogin=false;
  this.router.navigate(['/login'])
  }
}
