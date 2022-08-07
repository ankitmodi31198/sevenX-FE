import { TestBed } from '@angular/core/testing';

import { StartupIdeaDocsService } from './startup-idea-docs.service';

describe('StartupIdeaDocsService', () => {
  let service: StartupIdeaDocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartupIdeaDocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
