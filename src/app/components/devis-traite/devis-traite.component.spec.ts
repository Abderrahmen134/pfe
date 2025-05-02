import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisTraiteComponent } from './devis-traite.component';

describe('DevisTraiteComponent', () => {
  let component: DevisTraiteComponent;
  let fixture: ComponentFixture<DevisTraiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisTraiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevisTraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
