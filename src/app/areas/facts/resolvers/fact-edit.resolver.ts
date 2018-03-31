import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { Fact, FactDataService } from 'app/shared';

@Injectable()
export class FactEditResolver implements Resolve<Promise<Fact>> {
  public constructor(
    private factDataService: FactDataService) { }

  public async resolve(route: ActivatedRouteSnapshot): Promise<Fact> {
    const factId = route.paramMap.get('factId');
    if (!factId || factId === '-1') {
      return Promise.resolve(new Fact());
    }

    const fact = await this.factDataService.loadFactbyIdAsync(factId);
    return fact;
  }
}
