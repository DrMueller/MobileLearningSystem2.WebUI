import { Injectable } from '@angular/core';

import { ObjectUtils } from 'app/infrastructure/utils';
import { CoreHttpService } from 'app/shared/app-services';

import { LearningSession } from '../models';

@Injectable()
export class LearningSessionHttpService {
  private readonly relativeUrl = 'learningSessions';

  public constructor(private httpService: CoreHttpService) { }

  public async saveAsync(learningSession: LearningSession): Promise<void> {
    if (!ObjectUtils.isNullOrUndefined(learningSession.id)) {
      this.httpService.putAsync(this.relativeUrl, learningSession);
    } else {
      this.httpService.postAsync(this.relativeUrl, learningSession);
    }
  }

  public deleteAsync(id: string): Promise<void> {
    const url = this.relativeUrl + '/' + id;
    return this.httpService.deleteAsync(url);
  }

  public loadAllAsync(): Promise<LearningSession[]> {
    return this.httpService.getArrayAsync(this.relativeUrl, LearningSession);
  }

  public loadByIdAsync(id: string): Promise<LearningSession> {
    const url = this.relativeUrl + '/' + id;
    return this.httpService.getAsync(url, LearningSession);
  }

}
