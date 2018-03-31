import { Injectable } from '@angular/core';

import { CoreHttpService } from 'app/shared/app-services';
import { LearningSessionOverviewEntry } from '../models';

@Injectable()
export class LearningSessionsOverviewService {
  private readonly relativeUrl = 'learningSessions';

  public constructor(private httpService: CoreHttpService) { }

  public async loadOverviewEntriesAsync(): Promise<LearningSessionOverviewEntry[]> {
    const url = this.relativeUrl + '/Overview';
    const result = await this.httpService.getArrayAsync(url, LearningSessionOverviewEntry);
    return result;
  }
}
