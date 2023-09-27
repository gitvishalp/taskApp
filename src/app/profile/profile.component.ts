import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {

  constructor(private employeeService:EmployeeServiceService,private router:Router,private route:ActivatedRoute){}
  employee:any={}
  ngOnInit(): void {
      this.employeeService.getEmployeeDetails()
      .subscribe(res=>{
        this.employee=res
      })
  }

}
