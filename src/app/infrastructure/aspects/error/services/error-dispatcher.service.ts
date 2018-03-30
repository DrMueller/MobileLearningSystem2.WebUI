import { Injectable } from '@angular/core';

import { ErrorInformation } from '../models';
import { ErrorRegistrationService } from './error-registration.service';

@Injectable()
export class ErrorDispatcherService {

  public constructor(private errorRegistrationService: ErrorRegistrationService) { }

  public dispatchError(error: Error): void {
    this.prepareAndDispatchErrorInformation(error);
  }

  private createErrorInformation(error: Error): ErrorInformation {
    error = this.unwrapError(error);
    const errorMessage = error.message || 'Unknown';
    const errorName = error.name;
    const result = new ErrorInformation(errorName, errorMessage);
    return result;
  }

  private prepareAndDispatchErrorInformation(error: Error) {
    const errInfo = this.createErrorInformation(error);

    this.errorRegistrationService.registeredErrorCallbacks.forEach(cb => {
      cb(errInfo);
    });
  }

  private unwrapError(error: any): Error {
    if (error.hasOwnProperty('rejection')) {
      error = error.rejection;
    }

    if (error.hasOwnProperty('status') && error.status === 0) {
      return new Error('Server not reachable');
    }

    if (typeof error.json === 'function') {
      error = error.json();
    }

    while (error.hasOwnProperty('error')) {
      error = error.error;
    }

    console.log(error);

    return error;
  }
}
