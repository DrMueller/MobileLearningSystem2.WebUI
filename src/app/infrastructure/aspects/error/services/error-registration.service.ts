import { Injectable } from '@angular/core';

import { ErrorCallback } from '../types';

@Injectable()
export class ErrorRegistrationService {
  private errorCallbacks: ErrorCallback[] = [];

  constructor() { }

  public get registeredErrorCallbacks(): ErrorCallback[] {
    return this.errorCallbacks;
  }

  public registerErrorCallback(errorCallback: ErrorCallback): void {
    this.errorCallbacks.push(errorCallback);
  }
}
