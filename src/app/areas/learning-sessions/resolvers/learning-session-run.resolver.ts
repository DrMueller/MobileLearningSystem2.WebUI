import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { LearningSessionRunFact } from '../models';
import { LearningSessionRunService } from '../domain-services';

@Injectable()
export class LearningSessionRunResolver implements Resolve<Promise<Array<LearningSessionRunFact>>> {

  public constructor(
    private runService: LearningSessionRunService) { }

  public async resolve(route: ActivatedRouteSnapshot): Promise<Array<LearningSessionRunFact>> {
    const learningSessionId = route.paramMap.get('learningSessionId');
    if (!learningSessionId || learningSessionId === '-1') {
      return Promise.resolve(new Array<LearningSessionRunFact>());
    }

    const runFacts = await this.runService.loadRunFacts(learningSessionId);
    return runFacts;
  }
}
