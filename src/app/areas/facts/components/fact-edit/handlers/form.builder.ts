import {
  FormValidationService, FormWithValidation, RxFormBuilder, ValidatorFactoryService
} from 'app/infrastructure/shared-features/rx-forms';

export class FormBuilder {
  public static buildForm(
    formValidationService: FormValidationService,
    formBuilder: RxFormBuilder,
    validatorFactory: ValidatorFactoryService): FormWithValidation {

    const result = formBuilder.startBuildingFormGroup(formValidationService)
      .withControl('answerTextControl')
      .withModelBinding('answerText')
      .buildControl()
      .withControl('questionTextControl')
      .withModelBinding('questionText')
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
