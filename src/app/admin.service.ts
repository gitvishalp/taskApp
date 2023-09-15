import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService { 

  constructor(private http:HttpClient) { }
  active:String='CREATED'
  pending:String="PENDING"
  inprogress:String="IN PROGRESS"
  completed:String ="COMPLETED"
  token:String=''
  islogin=false;
  response:any={}
  adminLogin(formData:{UserName:String,Password:String}): Observable<any>{
     return this.http.post<any>('http://localhost:8081/v1/admin/Login',formData)
     .pipe(tap((data)=>{
         this.response=data
         if(this.response.Status===200){
          this.token= this.response.Data.Token
          this.islogin=true
         }
     }));
 }
  isLogined(){
    return this.islogin;
  }

 dashboardActiveProject(){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.get(`http://localhost:8081/v1/admin/CountProject/${this.active}`,{headers:header});
 }
 dashboardInprogressProject(){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.get(`http://localhost:8081/v1/admin/CountProject/${this.inprogress}`,{headers:header});
 }
 dashboardPendingProject(){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.get(`http://localhost:8081/v1/admin/CountProject/${this.pending}`,{headers:header});
 }
 dashBoardCompletedProject(){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.get(`http://localhost:8081/v1/admin/CountProject/${this.completed}`,{headers:header});
 }
 dashboardActiveTask(){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.get(`http://localhost:8081/v1/admin/CountTask/${this.active}`,{headers:header});
 }
 dashboardPendingTask(){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.get(`http://localhost:8081/v1/admin/CountTask/${this.pending}`,{headers:header});
 }
dashboardCompletedTask(){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.get(`http://localhost:8081/v1/admin/CountTask/${this.completed}`,{headers:header});
}

AddEmployee(FormData:{Name:String,Designition:String,DOB:Date,Email:String,PhoneNumber:String,Role:String}){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.post('http://localhost:8081/v1/admin/AddEmployee',FormData,{headers:header});
}
addProject(formData:{Title:String,Description:String,ExpectedCompletionDate:Date}){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.post('http://localhost:8081/v1/admin/AddProject',formData,{headers:header});
}
addTask(formdata:{Title:String,Description:String,ProjectId:String,Priority:String,AssigneeId:String,ExpectedCompletion:Date}){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.post('http://localhost:8081/v1/admin/AddTask',formdata,{headers:header});
}
getAllEmployee(){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.get('http://localhost:8081/v1/admin/employee',{headers:header});
}
getAllProject(){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.get('  http://localhost:8081/v1/admin/project',{headers:header});
}
deleteEmployee(empId:String){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.delete(`http://localhost:8081/v1/admin/employee/${empId}`,{headers:header});
}
deleteTaskById(taskId:String){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.delete(`http://localhost:8081/v1/admin/Task/${taskId}`,{headers:header});
}
getTaskByEmployee(empId:any){
  const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
  return this.http.get(`http://localhost:8081/v1/admin/task-by-employee/${empId}`,{headers:header});
}
}
