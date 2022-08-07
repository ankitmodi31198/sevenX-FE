import { TestBed } from '@angular/core/testing';

import { StartupIdeaAnalysisService } from './startup-idea-analysis.service';

describe('StartupIdeaAnalysisService', () => {
  let service: StartupIdeaAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartupIdeaAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
