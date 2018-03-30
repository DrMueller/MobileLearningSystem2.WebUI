import { OpaqueToken, ClassProvider } from '@angular/core';

import * as v from '../services/validator-implementations';

export class ValidatorProviderFactory {
  public static APP_VALIDATOR_TOKEN = new OpaqueToken('app_validator');

  // https://github.com/rangle/angular-2-aot-sandbox#aot-dos-and-donts
  public static ValidatorProviders: ClassProvider[] = [
    {
      provide: ValidatorProviderFactory.APP_VALIDATOR_TOKEN,
      multi: true,
      useClass: v.MinLengthValidator
    },
    {
      provide: ValidatorProviderFactory.APP_VALIDATOR_TOKEN,
      multi: true,
      useClass: v.StringMatchValidator
    },
    {
      provide: ValidatorProviderFactory.APP_VALIDATOR_TOKEN,
      multi: true,
      useClass: v.PatternValidator
    },
    {
      provide: ValidatorProviderFactory.APP_VALIDATOR_TOKEN,
      multi: true,
      useClass: v.RequiredValidator
    }
  ];
}
