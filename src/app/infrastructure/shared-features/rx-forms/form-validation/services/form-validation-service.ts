import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { ValidatedForm, ValidationControlErrorsMap, ValidationError } from '../';

@Injectable()
export class FormValidationService {
  private controlErrorsMaps: ValidationControlErrorsMap[];
  private formGroup: FormGroup;
  private validatedForm: ValidatedForm;

  public initialize(formGroup: FormGroup, controlErrorsMaps: ValidationControlErrorsMap[], validatedForm: ValidatedForm): void {
    this.controlErrorsMaps = controlErrorsMaps;
    this.formGroup = formGroup;
    this.validatedForm = validatedForm;
  }

  public validate(): void {
    for (const controlName in this.formGroup.controls) {
      if (this.formGroup.controls.hasOwnProperty(controlName)) {
        const validationErrors = this.getControlValidationErrors(controlName);
        this.validatedForm.setControlValidationErrors(controlName, validationErrors);
      }
    }
  }

  private getControlValidationErrors(controlName: string): ValidationError[] {
    const control = this.formGroup.controls[controlName];
    const controlErorrKeys = this.getControlErrorKeys(control);
    if (controlErorrKeys) {
      const controlErrorsMap = this.controlErrorsMaps.find(f => f.controlName === controlName);
      if (controlErrorsMap) {
        return controlErrorsMap.getValidationErrors(controlErorrKeys);
      }
    }

    return [];
  }

  private getControlErrorKeys(control: AbstractControl): string[] | undefined {
    if ((control.touched || control.dirty) && !control.valid) {
      const controlErrors = Object.keys(control.errors!);
      return controlErrors;
    }

    return undefined;
  }
}
