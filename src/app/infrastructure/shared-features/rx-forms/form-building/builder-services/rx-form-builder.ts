import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  FormValidationService, FormWithValidation, ValidatedControl, ValidatedForm,
  ValidationControlErrorsMap
} from '../../form-validation';
import { IFormControlBuilder, IFormWatchingBuilder, IRxFormBuilder } from '../interfaces';
import { FormControlBuilder } from './form-control-builder';
import { FormWatchingBuilder } from './form-watching-builder';

@Injectable()
export class RxFormBuilder implements IRxFormBuilder {
  private controlErrorsMaps: ValidationControlErrorsMap[];
  private formGroup: FormGroup;
  private formValidationService: FormValidationService;
  private validatedControls: ValidatedControl[];

  public constructor(private formBuilder: FormBuilder) {
  }

  public buildForm(): FormWithValidation {
    const validatedForm = new ValidatedForm(this.validatedControls);
    this.formValidationService.initialize(this.formGroup, this.controlErrorsMaps, validatedForm);
    const result = new FormWithValidation(this.formGroup, validatedForm);
    return result;
  }

  public startBuildingFormGroup(formValidationService: FormValidationService): IRxFormBuilder {
    this.formValidationService = formValidationService;
    this.controlErrorsMaps = [];
    this.validatedControls = [];
    this.formGroup = this.formBuilder.group({});

    return this;
  }

  public withControl(controlName: string): IFormControlBuilder {
    const formControlBuilder = new FormControlBuilder(controlName, this.controlErrorsMaps, this.formGroup, this.validatedControls, this);
    return formControlBuilder;
  }

  public withFormValidationWatcher(): IFormWatchingBuilder {
    const formWatchingBuilder = new FormWatchingBuilder(this.formGroup, this.formValidationService, this);
    return formWatchingBuilder;
  }
}
