import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base-service/base.service';

@Injectable({
    providedIn: 'root'
})
export class StartupIdeaListService extends BaseService {
  urlPath: string = 'startup-idea-list';

  constructor(protected httpClient: HttpClient, protected injector: Injector) {
    super(httpClient, injector);
  }
}