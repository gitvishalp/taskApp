import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbyprojectComponent } from './taskbyproject.component';

describe('TaskbyprojectComponent', () => {
  let component: TaskbyprojectComponent;
  let fixture: ComponentFixture<TaskbyprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskbyprojectComponent]
    });
    fixture = TestBed.createComponent(TaskbyprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
