import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbyemployeeComponent } from './taskbyemployee.component';

describe('TaskbyemployeeComponent', () => {
  let component: TaskbyemployeeComponent;
  let fixture: ComponentFixture<TaskbyemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskbyemployeeComponent]
    });
    fixture = TestBed.createComponent(TaskbyemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
