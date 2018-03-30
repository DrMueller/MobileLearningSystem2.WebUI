import { ValidatedControl, ValidationError } from '.';

import { ObjectUtils } from '../../../../utils';

export class ValidatedForm {
  public constructor(private validatedControls: ValidatedControl[]) {
  }

  public find(controlName: string): ValidatedControl {
    const controlValidation = this.validatedControls.find(f => f.controlName === controlName);
    if (controlValidation) {
      return controlValidation;
    }

    throw new Error(`Control ${controlName} not found.`);
  }

  public getControlsWithModelBinding(): ValidatedControl[] {
    const result = this.validatedControls.filter(control => {
      return !ObjectUtils.isNullOrUndefined(control.modelPropertyName);
    });

    return result;
  }

  public setControlValidationErrors(controlName: string, validationErrors: ValidationError[]) {
    const control = this.find(controlName);
    control.setValidationErrors(validationErrors);
  }

  public static get nullObject(): ValidatedForm {
    return new ValidatedForm([]);
  }
}
