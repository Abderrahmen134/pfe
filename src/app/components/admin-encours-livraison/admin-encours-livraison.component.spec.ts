import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEncoursLivraisonComponent } from './admin-encours-livraison.component';

describe('AdminEncoursLivraisonComponent', () => {
  let component: AdminEncoursLivraisonComponent;
  let fixture: ComponentFixture<AdminEncoursLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEncoursLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEncoursLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
