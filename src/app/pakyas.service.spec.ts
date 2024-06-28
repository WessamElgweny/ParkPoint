import { TestBed } from '@angular/core/testing';

import { PakyasService } from './pakyas.service';

describe('PakyasService', () => {
  let service: PakyasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PakyasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
