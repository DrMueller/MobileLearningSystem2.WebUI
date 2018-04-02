import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { Fact } from 'app/shared/models';

import { LearningSessionDataService } from '../domain-services';

@Injectable()
export class LearningSessionRunResolver implements Resolve<Promise<Array<Fact>>> {

  public constructor(
    private dataService: LearningSessionDataService) { }

  public async resolve(route: ActivatedRouteSnapshot): Promise<Array<Fact>> {
    const learningSessionId = route.paramMap.get('learningSessionId');
    if (!learningSessionId || learningSessionId === '-1') {
      return Promise.resolve(new Array<Fact>());
    }

    const runFacts = await this.dataService.loadFactsAsync(learningSessionId);
    return runFacts;
  }
}
