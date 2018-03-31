import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { LearningSessionEdit } from '../models';
import { LearningSessionDataService } from '../domain-services';

@Injectable()
export class LearningSessionResolver implements Resolve<Promise<LearningSessionEdit>> {

  public constructor(
    private dataService: LearningSessionDataService) { }

  public async resolve(route: ActivatedRouteSnapshot): Promise<LearningSessionEdit> {
    const id = route.paramMap.get('learningSessionId');
    if (!id || id === '-1') {
      return Promise.resolve(new LearningSessionEdit());
    }

    const learningSession = await this.dataService.loadLearningSessionEditByIdAsync(id);
    return learningSession;
  }
}
