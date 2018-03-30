import { ValidatorFn, Validators } from '@angular/forms';

import { IValidator } from '..';

export class MinLengthValidator implements IValidator {
  public static key = 'minlength';

  private _minLength: number;

  public createFunc(): ValidatorFn {
    return Validators.minLength(this._minLength);
  }

  public get defaultErrorMessage(): string {
    return `Value is smaller than ${this._minLength}.`;
  }

  public initialize(...funcArgs: any[]) {
    const minLength = <number>funcArgs[0];
    this._minLength = minLength;
  }

  public get key(): string {
    return MinLengthValidator.key;
  }
}
