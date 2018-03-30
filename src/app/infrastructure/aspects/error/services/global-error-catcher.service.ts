import { Injectable, ErrorHandler } from '@angular/core';

import { ErrorDispatcherService } from './error-dispatcher.service';

@Injectable()
export class GlobalErrorCatcherService implements ErrorHandler {
  constructor(private errorDispatcherService: ErrorDispatcherService) { }

  public handleError(error: Error) {
    this.errorDispatcherService.dispatchError(error);
  }
}
