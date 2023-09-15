import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-admsidenav',
  templateUrl: './admsidenav.component.html',
  styleUrls: ['./admsidenav.component.css']
})
export class AdmsidenavComponent {

  constructor(private router:Router, private adminService:AdminService){

  }
  logout(){
    this.adminService.islogin=false;
    this.router.navigate(['/login'])
  }
}
