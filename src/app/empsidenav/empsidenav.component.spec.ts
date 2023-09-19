import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsidenavComponent } from './empsidenav.component';

describe('EmpsidenavComponent', () => {
  let component: EmpsidenavComponent;
  let fixture: ComponentFixture<EmpsidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpsidenavComponent]
    });
    fixture = TestBed.createComponent(EmpsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
