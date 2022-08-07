import { TestBed } from '@angular/core/testing';

import { CoFounderDocsService } from './co-founder-docs.service';

describe('CoFounderDocsService', () => {
  let service: CoFounderDocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoFounderDocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
