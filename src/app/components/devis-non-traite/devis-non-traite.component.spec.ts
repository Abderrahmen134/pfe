import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisNonTraiteComponent } from './devis-non-traite.component';

describe('DevisNonTraiteComponent', () => {
  let component: DevisNonTraiteComponent;
  let fixture: ComponentFixture<DevisNonTraiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisNonTraiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevisNonTraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
