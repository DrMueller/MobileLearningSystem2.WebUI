import { Injectable } from '@angular/core';

import { CoreHttpService } from 'app/shared/app-services';
import { LearningSessionRunFact } from '../models';

@Injectable()
export class LearningSessionRunService {
  private readonly relativeUrl = 'learningSessions';

  constructor(private httpService: CoreHttpService) { }

  public async loadRunFacts(id: string): Promise<Array<LearningSessionRunFact>> {
    const url = this.relativeUrl + '/' + id + '/Run';
    const result = await this.httpService.getArrayAsync(url, LearningSessionRunFact);
    return result;
  }
}
