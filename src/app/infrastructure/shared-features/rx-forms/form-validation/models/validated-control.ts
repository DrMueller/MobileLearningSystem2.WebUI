import { ControlValidationErrorContainer } from './control-validation-error-container';
import { ValidationError } from './validation-error';

export class ValidatedControl {
  private _errorContainer = ControlValidationErrorContainer.nullObject;

  public constructor(public controlName: string, public modelPropertyName: string | null) {
  }

  public get errorContainer(): ControlValidationErrorContainer {
    return this._errorContainer;
  }

  public get hasErrors(): boolean {
    return this.errorContainer.validationErrors.length > 0;
  }

  public static create(controlName: string, modelPropertyName: string | null = null): ValidatedControl {
    return new ValidatedControl(controlName, modelPropertyName);
  }

  public setValidationErrors(validationErrors: ValidationError[]) {
    this._errorContainer.setValidationErrors(validationErrors);
  }
}
