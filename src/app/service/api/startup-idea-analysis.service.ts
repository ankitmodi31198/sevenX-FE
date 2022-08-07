import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base-service/base.service';


@Injectable()
export class StartupIdeaAnalysisService extends BaseService {

  urlPath: string = 'startup-idea';

  constructor(protected httpClient: HttpClient, protected injector: Injector) {
    super(httpClient, injector);
  }
}