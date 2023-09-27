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
  if(localStorage.getItem('userLogin')=='false'){
    this.router.navigate(['/login'])
  }else{
    this.EmpService.getEmployeeDetails()
    .subscribe(res=>{
      this.employee=res
    })
  }
}
profile(employeeId:String){
this.router.navigate(['/emp-profile'],{queryParams:{employeeId:employeeId}});
}
  logout(){
  this.EmpService.logout();
  this.router.navigate(['/login']);
  }
}
