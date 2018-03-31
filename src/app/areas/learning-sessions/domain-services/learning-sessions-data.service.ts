import { Injectable } from '@angular/core';

import { ObjectUtils } from 'app/infrastructure/utils';

import { CoreHttpService } from 'app/shared/app-services';
import { LearningSessionEdit } from '../models';

@Injectable()
export class LearningSessionDataService {
  private readonly relativeUrl = 'learningSessions';

  public constructor(private httpService: CoreHttpService) { }

  public async saveLearningSessionAsync(fact: LearningSessionEdit): Promise<void> {
    if (ObjectUtils.isNullOrUndefined(fact.id)) {
      this.httpService.postAsync(this.relativeUrl, fact);
    } else {
      this.httpService.putAsync(this.relativeUrl, fact);
    }
  }

  public deleteLearningSessionAsync(id: string): Promise<void> {
    const url = this.relativeUrl + '/' + id;
    return this.httpService.deleteAsync(url);
  }

  public loadAllLearningSessionsAsync(): Promise<LearningSessionEdit[]> {
    return this.httpService.getArrayAsync(this.relativeUrl, LearningSessionEdit);
  }

  public loadLearningSessionEditByIdAsync(id: string): Promise<LearningSessionEdit> {
    const url = this.relativeUrl + '/' + id + '/Edit';
    return this.httpService.getAsync(url, LearningSessionEdit);
  }
}
