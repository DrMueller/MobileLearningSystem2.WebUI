import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { LearningSessionDataService } from '../domain-services';
import { LearningSession } from '../models';

@Injectable()
export class LearningSessionEditResolver implements Resolve<Promise<LearningSession>> {
  public constructor(
    private dataService: LearningSessionDataService) { }

  public async resolve(route: ActivatedRouteSnapshot): Promise<LearningSession> {
    const id = route.paramMap.get('learningSessionId');
    if (!id || id === '-1') {
      return Promise.resolve(new LearningSession());
    }

    const learningSession = await this.dataService.loadLearningSessionByIdAsync(id);
    return learningSession;
  }
}
