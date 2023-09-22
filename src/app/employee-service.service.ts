import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  active:String='CREATED'
  pending:String='PENDING'
  inprogress:String='IN PROGRESS'
  completed:String ='COMPLETED'
  response:any={}
  constructor(private http:HttpClient) { }
  
  employeeLogin(formData:{Email:String,Password:String}):Observable<any>{
    return this.http.post<any>('http://localhost:8081/v1/employee/login',formData)
    .pipe(tap((data)=>{
      this.response=data
      if(this.response.Status===200){
       localStorage.setItem('userToken',this.response.Data.Token);
       localStorage.setItem('userLogin','true');
      }
    }))
  }
  getEmployeeDetails(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
    return this.http.get('http://localhost:8081/v1/employee',{headers:header});
  }
  getEmpAllTask(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
    return this.http.get('http://localhost:8081/v1/employee/task',{headers:header});
  }
  getActiveTask(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
    return this.http.get('http://localhost:8081/v1/employee/task/CREATED',{headers:header});
  }
  getPendingTask(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
    return this.http.get('http://localhost:8081/v1/employee/task/PENDING',{headers:header});
  }
  getInprogresstask(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
    return this.http.get(`http://localhost:8081/v1/employee/task/${this.inprogress}`,{headers:header});
  }
  getCompletedTask(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
    return this.http.get('http://localhost:8081/v1/employee/task/COMPLETED',{headers:header});
  }
  getEmpAllProject(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
    return this.http.get('http://localhost:8081/v1/employee/project',{headers:header});
  }
  getProjectCount(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
    return this.http.get('http://localhost:8081/v1/employee/project-count',{headers:header});
  }
  changePassword(formData:{NewPass:String}){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
     return this.http.put('http://localhost:8081/v1/employee/change-password',formData,{headers:header});
  }
  updateTask(formData:{Status:String,Remarks:String},taskId:any){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
    return this.http.put(`http://localhost:8081/v1/employee/task/${taskId}`,formData,{headers:header});
  }
  getAllNotification(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
    return this.http.get('http://localhost:8081/v1/employee/notification',{headers:header});
  }
  deleteNotification(notificationId:String){
    const header = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('userToken')}`);
    return this.http.delete(`http://localhost:8081/v1/employee/notification/${notificationId}`,{headers:header});
  }
  logout(){
    localStorage.removeItem('userToken');
    localStorage.setItem('userLogin','false');
  }
}
