import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDevisComponent } from './admin-devis.component';

describe('AdminDevisComponent', () => {
  let component: AdminDevisComponent;
  let fixture: ComponentFixture<AdminDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
