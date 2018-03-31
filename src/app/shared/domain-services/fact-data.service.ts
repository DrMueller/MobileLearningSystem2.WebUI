import { Injectable } from '@angular/core';

import { ObjectUtils } from 'app/infrastructure/utils';

import { CoreHttpService } from '../app-services';
import { Fact } from '../models';

@Injectable()
export class FactDataService {
  private readonly relativeUrl = 'Facts';

  public constructor(private httpService: CoreHttpService) { }

  public async saveFactAsync(fact: Fact): Promise<void> {
    if (!ObjectUtils.isNullOrUndefined(fact.id)) {
      this.httpService.putAsync(this.relativeUrl, fact);
    } else {
      this.httpService.postAsync(this.relativeUrl, fact);
    }
  }

  public deleteFactAsync(id: string): Promise<void> {
    const url = this.relativeUrl + '/' + id;
    return this.httpService.deleteAsync(url);
  }

  public loadAllFactsAsync(): Promise<Fact[]> {
    return this.httpService.getArrayAsync(this.relativeUrl, Fact);
  }

  public loadFactbyIdAsync(id: string): Promise<Fact> {
    const url = this.relativeUrl + '/' + id;
    return this.httpService.getAsync(url, Fact);
  }
}
