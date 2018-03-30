import { Injectable } from '@angular/core';

import { LearningSessionsHttpService } from '../app-services';
import { LearningSessionRunFact } from '../models';

@Injectable()
export class LearningSessionRunService {
  private readonly relativeUrl = 'learningSessions';

  constructor(private httpService: LearningSessionsHttpService) { }

  public async loadRunFacts(id: string): Promise<Array<LearningSessionRunFact>> {
    const url = this.relativeUrl + '/' + id + '/Run';
    var result = await this.httpService.getArrayAsync(url, LearningSessionRunFact);
    return result;
  }
}
