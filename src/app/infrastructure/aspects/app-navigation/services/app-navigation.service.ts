import { Injectable } from '@angular/core';

import { AppNavigationEntry } from '../models';

@Injectable()
export class AppNavigationService {

  constructor() { }

  public getNavigationEntries(): AppNavigationEntry[] {
    const result = new Array<AppNavigationEntry>();

    result.push(new AppNavigationEntry('Facts', '/facts'));
    result.push(new AppNavigationEntry('Learning sessions', '/learningSessions'));

    return result;
  }
}
