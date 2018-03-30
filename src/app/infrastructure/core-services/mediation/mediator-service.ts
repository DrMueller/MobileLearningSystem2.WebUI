import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class MediatorService<T> {
  private subject = new Subject<T>();

  public subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Subscription {
    return this.subject.subscribe(next, error, complete);
  }

  public publish(data: T): void {
    this.subject.next(data);
  }
}
