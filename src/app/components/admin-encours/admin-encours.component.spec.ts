import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEncoursComponent } from './admin-encours.component';

describe('AdminEncoursComponent', () => {
  let component: AdminEncoursComponent;
  let fixture: ComponentFixture<AdminEncoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEncoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
