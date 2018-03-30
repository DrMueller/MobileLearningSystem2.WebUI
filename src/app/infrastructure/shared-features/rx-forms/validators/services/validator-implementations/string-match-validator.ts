import { AbstractControl, ValidatorFn } from '@angular/forms';

import { IValidator, IValidatorFunctionResult } from '..';

export class StringMatchValidator implements IValidator {
  public static key = 'stringmatch';
  private _check: string;

  public createFunc(): ValidatorFn {
    return (c: AbstractControl): IValidatorFunctionResult => {
      let result: any = null;

      if (c.value !== this._check) {
        result = {};
        result[this.key] = true;
      }

      return result;
    };
  }

  public get defaultErrorMessage(): string {
    return `Value is not ${this._check}.`;
  }

  public initialize(...funcArgs: any[]) {
    const check = <string>funcArgs[0];
    this._check = check;
  }

  public get key(): string {
    return StringMatchValidator.key;
  }
}
