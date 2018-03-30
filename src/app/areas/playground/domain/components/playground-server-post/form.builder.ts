import {
    FormValidationService, FormWithValidation, RxFormBuilder, ValidatorFactoryService
} from 'app/infrastructure/shared-features/rx-forms';

export class FormBuilder {
  public static buildForm(
    formValidationService: FormValidationService,
    formBuilder: RxFormBuilder,
    validatorFactory: ValidatorFactoryService): FormWithValidation {

    const result = formBuilder.startBuildingFormGroup(formValidationService)
      .withControl('firstNameControl')
      .withModelBinding('firstName')
      .withDefaultValue('Matthias')
      .withValidation(validatorFactory.required())
      .buildValidationKeyErrorMap()
      .buildControl()
      .withControl('lastNameControl')
      .withModelBinding('lastName')
      .withValidation(validatorFactory.required())
      .buildValidationKeyErrorMap()
      .buildControl()
      .withFormValidationWatcher()
      .withDebcounceTime(500)
      .buildFormWatcher()
      .buildForm();

    return result;
  }
}
