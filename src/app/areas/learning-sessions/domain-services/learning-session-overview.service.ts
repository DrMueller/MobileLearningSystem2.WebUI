import { Injectable } from '@angular/core';

import { CoreHttpService } from 'app/infrastructure/core-services/http';

import { LearningSession } from '../models';

@Injectable()
export class LearningSessionOverviewService {
  private readonly relativeUrl = 'learningSessions';

  public constructor(private httpService: CoreHttpService) { }

  public deleteLearningSessionAsync(id: string): Promise<void> {
    const url = this.relativeUrl + '/' + id;
    return this.httpService.deleteAsync(url);
  }

  public loadAllLearningSessionsAsync(): Promise<LearningSession[]> {
    return this.httpService.getArrayAsync(this.relativeUrl, LearningSession);
  }
}
