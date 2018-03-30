import { Injectable } from '@angular/core';

import { ErrorInformation } from '../models';
import { ErrorDisplayService } from './error-display.service';
import { ErrorRegistrationService } from './error-registration.service';

@Injectable()
export class ErrorAppInitializationService {

  public constructor(private errorDisplayService: ErrorDisplayService, private errorRegistrationService: ErrorRegistrationService) { }

  public initialize(): void {
    this.errorRegistrationService.registerErrorCallback((errorInformation: ErrorInformation) => {
      this.errorDisplayService.showError(errorInformation);
    });
  }
}
