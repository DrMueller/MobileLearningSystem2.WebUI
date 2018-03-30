import { ValidatorFn, Validators } from '@angular/forms';

import { IValidator } from '..';

export class PatternValidator implements IValidator {
  public static key = 'pattern';

  private pattern: RegExp;

  public createFunc(): ValidatorFn {
    return Validators.pattern(this.pattern);
  }

  public get defaultErrorMessage(): string {
    return `Value is not matching '${this.pattern}'.`;
  }

  public initialize(...funcArgs: any[]) {
    const pattern = <RegExp>funcArgs[0];
    this.pattern = pattern;
  }

  public get key(): string {
    return PatternValidator.key;
  }
}
