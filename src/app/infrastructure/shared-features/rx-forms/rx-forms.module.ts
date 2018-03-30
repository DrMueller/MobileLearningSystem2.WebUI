import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormValidationService } from './form-validation';
import { RxFormBuilder } from './form-building';
import { ValidatorFactoryService } from './validators';
import { ValidatorProviderFactory } from './validators/provisioning';

import * as comp from './form-validation/components';

@NgModule({
  exports: [
    ReactiveFormsModule,
    FormsModule,
    comp.FormControlComponent,
    comp.FormValidationErrorDisplayComponent,
    comp.FormControlWithValidationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    comp.FormValidationErrorDisplayComponent,
    comp.FormControlComponent,
    comp.FormControlWithValidationComponent
  ]
})

export class RxFormsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: RxFormsModule,
      providers: [
        ValidatorProviderFactory.ValidatorProviders,
        RxFormBuilder,
        FormValidationService,
        ValidatorFactoryService
      ]
    };
  }
}
