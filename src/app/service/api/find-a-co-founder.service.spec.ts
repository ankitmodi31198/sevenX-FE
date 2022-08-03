import { TestBed } from '@angular/core/testing';

import { FindACoFounderService } from './find-a-co-founder.service';

describe('FindACoFounderService', () => {
  let service: FindACoFounderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindACoFounderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
