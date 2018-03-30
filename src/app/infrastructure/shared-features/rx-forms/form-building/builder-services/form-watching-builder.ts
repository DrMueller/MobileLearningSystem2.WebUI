import { FormGroup } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

import { FormValidationService } from '../../form-validation';
import { IFormWatchingBuilder, IRxFormBuilder } from '../interfaces';

export class FormWatchingBuilder implements IFormWatchingBuilder {
  private debounceMilliseconds = 0;

  constructor(
    private formGroup: FormGroup,
    private formValidationService: FormValidationService,
    private formBuildingService: IRxFormBuilder) {
  }

  withDebcounceTime(debounceMilliseconds: number): IFormWatchingBuilder {
    this.debounceMilliseconds = debounceMilliseconds;
    return this;
  }

  buildFormWatcher(): IRxFormBuilder {
    this.formGroup.valueChanges.debounceTime(this.debounceMilliseconds).subscribe(() => {
      this.formValidationService.validate();
    });

    return this.formBuildingService;
  }
}
