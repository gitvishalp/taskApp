import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpnotificationComponent } from './empnotification.component';

describe('EmpnotificationComponent', () => {
  let component: EmpnotificationComponent;
  let fixture: ComponentFixture<EmpnotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpnotificationComponent]
    });
    fixture = TestBed.createComponent(EmpnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
