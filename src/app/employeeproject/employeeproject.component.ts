import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeproject',
  templateUrl: './employeeproject.component.html',
  styleUrls: ['./employeeproject.component.css']
})
export class EmployeeprojectComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'description', 'status','task'];
  dataSource:any = [];

  constructor(private empService:EmployeeServiceService,private router:Router){}

  ngOnInit(): void {
    if(localStorage.getItem('userLogin')=='false'){
      this.router.navigate(['/login'])
    }else{
        this.empService.getEmpAllProject()
        .subscribe((res:any)=>{
          this.dataSource=res.Data;
        })
      }
  }
}
