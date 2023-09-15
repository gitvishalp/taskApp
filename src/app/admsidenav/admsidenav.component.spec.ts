import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmsidenavComponent } from './admsidenav.component';

describe('AdmsidenavComponent', () => {
  let component: AdmsidenavComponent;
  let fixture: ComponentFixture<AdmsidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmsidenavComponent]
    });
    fixture = TestBed.createComponent(AdmsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
