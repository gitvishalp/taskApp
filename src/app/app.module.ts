import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {NgFor, DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { AddprojectComponent } from './addproject/addproject.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { HttpClient } from '@angular/common/http';
import { AdmsidenavComponent } from './admsidenav/admsidenav.component';
import { HeaderComponent } from './header/header.component';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import { EmployeeComponent } from './employee/employee.component';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { TaskbyemployeeComponent } from './taskbyemployee/taskbyemployee.component';
import { ProjectComponent } from './project/project.component';
import { TaskbyprojectComponent } from './taskbyproject/taskbyproject.component';
import { TaskComponent } from './task/task.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EmpsidenavComponent } from './empsidenav/empsidenav.component';
import { EmployeetaskComponent } from './employeetask/employeetask.component';
import { EmployeeprojectComponent } from './employeeproject/employeeproject.component';
import { EmployeeupdatetaskComponent } from './employeeupdatetask/employeeupdatetask.component';
import { AdminnotificationComponent } from './adminnotification/adminnotification.component';
import { EmpnotificationComponent } from './empnotification/empnotification.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddemployeeComponent,
    AdmindashboardComponent,
    AddprojectComponent,
    AddtaskComponent,
    AdmsidenavComponent,
    HeaderComponent,
    EmployeeComponent,
    TaskbyemployeeComponent,
    ProjectComponent,
    TaskbyprojectComponent,
    TaskComponent,
    UpdatetaskComponent,
    EmployeedashboardComponent,
    ChangepasswordComponent,
    EmpsidenavComponent,
    EmployeetaskComponent,
    EmployeeprojectComponent,
    EmployeeupdatetaskComponent,
    AdminnotificationComponent,
    EmpnotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    NgIf, MatSidenavModule,
    MatListModule, NgFor, MatDividerModule, DatePipe,
    MatInputModule,
    FormsModule,MatRippleModule,MatSelectModule,MatDatepickerModule,
    MatNativeDateModule,ReactiveFormsModule, NgIf,HttpClientModule,MatTreeModule,
    MatTableModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
