import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base-service/base.service';

@Injectable({
    providedIn: 'root'
})
export class FindCoFounderListService extends BaseService {
  urlPath: string = 'co-founder-list';

  constructor(protected httpClient: HttpClient, protected injector: Injector) {
    super(httpClient, injector);
  }
}