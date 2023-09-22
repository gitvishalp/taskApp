import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnotification',
  templateUrl: './adminnotification.component.html',
  styleUrls: ['./adminnotification.component.css']
})
export class AdminnotificationComponent implements OnInit {

  constructor(private adminService:AdminService, private router:Router){}

notifications:any=[]
delResponse:any={}
  ngOnInit(): void {
      this.adminService.getAllNotification()
     .subscribe((res:any)=>{
      this.notifications= res.Data
     })
  }
  onDelete(notificationId:String){
    this.adminService.deleteNotification(notificationId)
    .subscribe(res=>{
      this.delResponse=res
    })
  }
 tasks(){
  this.router.navigate(['/task'])
 }
}
