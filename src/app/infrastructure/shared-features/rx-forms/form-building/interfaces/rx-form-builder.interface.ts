import { IFormControlBuilder, IFormWatchingBuilder } from '.';
import { FormValidationService, FormWithValidation } from '../../form-validation';

export interface IRxFormBuilder {
  buildForm(): FormWithValidation;
  startBuildingFormGroup(formValidationService: FormValidationService): IRxFormBuilder;
  withControl(controlName: string): IFormControlBuilder;
  withFormValidationWatcher(): IFormWatchingBuilder;
}
