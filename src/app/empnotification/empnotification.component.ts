import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empnotification',
  templateUrl: './empnotification.component.html',
  styleUrls: ['./empnotification.component.css']
})
export class EmpnotificationComponent implements OnInit {

  constructor(private empService:EmployeeServiceService, private router:Router){}
notifications:any=[]
delResponse:any={}
 ngOnInit(): void {
     this.empService.getAllNotification()
     .subscribe((res:any)=>{
      this.notifications=res.Data
     })
 }
 onDelete(notificationId:String){
  this.empService.deleteNotification(notificationId)
  .subscribe(res=>{
    this.delResponse=res
  })
 }
 tasks(){
 this.router.navigate(['/emp-task'])
 }
}
