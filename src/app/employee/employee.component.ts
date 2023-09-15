import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'dob', 'designition','role','email','phone','task','Action'];
  dataSource:any = [];
  sno=1;
  deleteResponse:any={}
 constructor(private adminService:AdminService, private router:Router, public dialog: MatDialog){

 }
 ngOnInit(): void {
     if(this.adminService.isLogined()==false){
     this.router.navigate(['/login'])
     }else{
      this.adminService.getAllEmployee()
      .subscribe((res:any)=>{
        this.dataSource=res.Data
      })
     }
 }
 gettask(empId:String){
  this.router.navigate(['/task-by-employee'],{queryParams:{employeeId:empId}});
 }
  addData(){
    console.log("data Added")
  }
  removeEmployee(empId:String){
    this.adminService.deleteEmployee(empId)
    .subscribe(res=>{
    this.deleteResponse=res
    if(this.deleteResponse.Status==200){
      this.router.navigate(['/employee'])
    }
    })
  }
}
