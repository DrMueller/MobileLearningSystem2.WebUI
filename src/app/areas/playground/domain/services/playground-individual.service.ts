import { Injectable } from '@angular/core';

import { Individual } from '../models';

@Injectable()
export class PlaygroundIndividualService {
  constructor() { }

  public postIndividualAsync(): Promise<Individual> {
    return Promise.reject(undefined);
  }

  public getIndividualsAsync(): Promise<Individual[]> {
    return Promise.reject(undefined);
  }
}
