import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConfirmeComponent } from './admin-confirme.component';

describe('AdminConfirmeComponent', () => {
  let component: AdminConfirmeComponent;
  let fixture: ComponentFixture<AdminConfirmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConfirmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
