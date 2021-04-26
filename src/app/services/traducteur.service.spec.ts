import { TestBed } from '@angular/core/testing';

import { TraducteurService } from './traducteur.service';

describe('TraducteurService', () => {
  let service: TraducteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraducteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
