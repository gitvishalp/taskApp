import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeprojectComponent } from './employeeproject.component';

describe('EmployeeprojectComponent', () => {
  let component: EmployeeprojectComponent;
  let fixture: ComponentFixture<EmployeeprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeprojectComponent]
    });
    fixture = TestBed.createComponent(EmployeeprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
