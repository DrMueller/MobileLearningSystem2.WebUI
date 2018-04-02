import { Injectable } from '@angular/core';

import { CoreHttpService } from 'app/infrastructure/core-services/http';
import { ObjectUtils } from 'app/infrastructure/utils';
import { Fact } from 'app/shared/models';

import { LearningSession } from '../models';

@Injectable()
export class LearningSessionDataService {
  private readonly relativeUrl = 'learningSessions';

  public constructor(private httpService: CoreHttpService) { }

  public async loadFactsAsync(learningSessionId: string): Promise<Array<Fact>> {
    const url = this.relativeUrl + '/' + learningSessionId + '/Facts';
    const facts = await this.httpService.getArrayAsync(url, Fact);
    return facts;
  }

  public async saveFactsAsync(learningSessionId: string, facts: Array<Fact>): Promise<void> {
    const url = this.relativeUrl + '/' + learningSessionId + '/Facts';
    await this.httpService.putAsync(url, facts, Fact);
  }

  public async saveLearningSessionAsync(learningSession: LearningSession): Promise<LearningSession> {
    if (ObjectUtils.isNullOrUndefined(learningSession.id)) {
      return await this.httpService.postAsync<LearningSession>(this.relativeUrl, learningSession);
    } else {
      return await this.httpService.putAsync<LearningSession>(this.relativeUrl, learningSession);
    }
  }

  public loadLearningSessionByIdAsync(id: string): Promise<LearningSession> {
    const url = this.relativeUrl + '/' + id;
    return this.httpService.getAsync(url, LearningSession);
  }
}
