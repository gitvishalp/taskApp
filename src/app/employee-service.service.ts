import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  active:String='CREATED'
  pending:String="PENDING"
  inprogress:String="IN PROGRESS"
  completed:String ="COMPLETED"
  token:String=''
  islogin=false;
  response:any={}
  constructor(private http:HttpClient) { }
  
  employeeLogin(formData:{Email:String,Password:String}):Observable<any>{
    return this.http.post<any>('http://localhost:8081/v1/employee/login',formData)
    .pipe(tap((data)=>{
      this.response=data
      if(this.response.Status===200){
       this.token= this.response.Data.Token
       this.islogin=true
      }
    }))
  }
  getEmployeeDetails(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
    return this.http.get('http://localhost:8081/v1/employee',{headers:header});
  }
  getEmpAllTask(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
    return this.http.get('http://localhost:8081/v1/employee/task',{headers:header});
  }
  getActiveTask(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
    return this.http.get('http://localhost:8081/v1/employee/task/CREATED',{headers:header});
  }
  getPendingTask(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
    return this.http.get('http://localhost:8081/v1/employee/task/PENDING',{headers:header});
  }
  getInprogresstask(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
    return this.http.get('http://localhost:8081/v1/employee/task/IN PROGRESS',{headers:header});
  }
  getCompletedTask(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
    return this.http.get('http://localhost:8081/v1/employee/task/COMPLETED',{headers:header});
  }
  getEmpAllProject(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
    return this.http.get('http://localhost:8081/v1/employee/project',{headers:header});
  }
  getProjectCount(){
    const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
    return this.http.get('http://localhost:8081/v1/employee/project-count',{headers:header});
  }
  changePassword(formData:{NewPass:String}){
    const header = new HttpHeaders().set('Authorization',`Bearer ${this.token}`);
     return this.http.put('http://localhost:8081/v1/employee/change-password',formData,{headers:header});
  }
  
  isLogined(){
    return this.islogin;
  }
}
