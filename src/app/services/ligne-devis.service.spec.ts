import { TestBed } from '@angular/core/testing';

import { LigneDevisService } from './ligne-devis.service';

describe('LigneDevisService', () => {
  let service: LigneDevisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneDevisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
