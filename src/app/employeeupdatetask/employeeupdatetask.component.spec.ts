import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeupdatetaskComponent } from './employeeupdatetask.component';

describe('EmployeeupdatetaskComponent', () => {
  let component: EmployeeupdatetaskComponent;
  let fixture: ComponentFixture<EmployeeupdatetaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeupdatetaskComponent]
    });
    fixture = TestBed.createComponent(EmployeeupdatetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
