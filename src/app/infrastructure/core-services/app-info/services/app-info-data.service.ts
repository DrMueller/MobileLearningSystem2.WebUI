import { Injectable } from '@angular/core';

import { CoreHttpService } from 'app/infrastructure/core-services/http';

import { ApplicationInformation } from '../models';

@Injectable()
export class AppInfoDataService {
  private readonly relativeUrl = 'ApplicationInformations';

  public constructor(private coreHttpService: CoreHttpService) {
  }

  public async getApplicationInformationAsync(): Promise<ApplicationInformation> {
    var result = await this.coreHttpService.getAsync(this.relativeUrl, ApplicationInformation);
    return result;
  }
}
