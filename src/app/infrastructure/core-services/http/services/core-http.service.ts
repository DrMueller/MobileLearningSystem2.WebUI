import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { EnvironmentService } from 'app/infrastructure/core-services/environment';
import { HttpBaseService } from './http-base.service';
import { ObjectFactoryService } from 'app/infrastructure/core-services/object-creation';

@Injectable()
export class CoreHttpService extends HttpBaseService {
  public constructor(http: Http, objectFactoryService: ObjectFactoryService, environmentService: EnvironmentService) {
    super(http, objectFactoryService, environmentService.baseUrl);
  }
}
