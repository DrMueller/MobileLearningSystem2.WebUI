import { Injectable } from '@angular/core';

import { LearningSessionsHttpService } from '../app-services';
import { LearningSessionOverviewEntry } from '../models';

@Injectable()
export class LearningSessionsOverviewService {
  private readonly relativeUrl = 'learningSessions';

  public constructor(private httpService: LearningSessionsHttpService) { }

  public async loadOverviewEntriesAsync(): Promise<LearningSessionOverviewEntry[]> {
    const url = this.relativeUrl + '/Overview';
    const result = await this.httpService.getArrayAsync(url, LearningSessionOverviewEntry);
    return result;
  }
}
