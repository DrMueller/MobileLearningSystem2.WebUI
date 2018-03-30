import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { IParameterlessConstructor } from 'app/infrastructure/types/interfaces';

@Injectable()
export class MediatorBuilderService<T> {
  private builderSubject = new Subject<T>();

  public subsribeBuildStep(nextBuildstep: (data: T) => void): Subscription {
    return this.builderSubject.subscribe(nextBuildstep);
  }

  public startBuilding(ctor: IParameterlessConstructor<T>): T {
    const result = new ctor();
    this.builderSubject.next(result);

    return result;
  }
}
