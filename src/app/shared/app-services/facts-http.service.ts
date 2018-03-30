import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { EnvironmentService } from 'app/infrastructure/core-services/environment';
import { HttpBaseService } from 'app/infrastructure/core-services/http';
import { ObjectFactoryService } from 'app/infrastructure/core-services/object-creation';

@Injectable()
export class FactsHttpService extends HttpBaseService {
  public constructor(http: Http, objectFactoryService: ObjectFactoryService, environmentService: EnvironmentService) {
    super(http, objectFactoryService, environmentService.baseUrl);
  }
}
