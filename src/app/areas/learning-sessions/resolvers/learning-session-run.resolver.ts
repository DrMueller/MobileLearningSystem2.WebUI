import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { LearningSessionRunFact } from '../models';

import { LearningSessionDataService } from '../domain-services';

@Injectable()
export class LearningSessionRunResolver implements Resolve<Promise<Array<LearningSessionRunFact>>> {

  public constructor(
    private dataService: LearningSessionDataService) { }

  public async resolve(route: ActivatedRouteSnapshot): Promise<Array<LearningSessionRunFact>> {
    const learningSessionId = route.paramMap.get('learningSessionId');
    if (!learningSessionId || learningSessionId === '-1') {
      return Promise.resolve(new Array<LearningSessionRunFact>());
    }

    const facts = await this.dataService.loadFactsAsync(learningSessionId);
    const result = facts.map(fact => new LearningSessionRunFact(fact.questionText, fact.answerText));
    return result;
  }
}
