import {
    FormValidationService, FormWithValidation, RxFormBuilder, ValidatorFactoryService
} from 'app/infrastructure/shared-features/rx-forms';

export class FormBuilder {
  public static buildForm(
    formValidationService: FormValidationService,
    formBuilder: RxFormBuilder,
    validatorFactory: ValidatorFactoryService): FormWithValidation {

    const result = formBuilder.startBuildingFormGroup(formValidationService)
      .withControl('emailControl')
      .withDefaultValue('fake1234@gmx.ch')
      .withValidation(validatorFactory.minLength(5))
      .withCustomErrorMessage('Email has to be at least 5 characters')
      .buildValidationKeyErrorMap()
      .withValidation(validatorFactory.required())
      .buildValidationKeyErrorMap()
      .buildControl()
      .withControl('individualControl')
      .withValidation(validatorFactory.required())
      .buildValidationKeyErrorMap()
      .buildControl()
      .withControl('countryControl')
      .withDefaultValue(2)
      .buildControl()
      .withFormValidationWatcher()
      .withDebcounceTime(500)
      .buildFormWatcher()
      .buildForm();

    return result;
  }
}
