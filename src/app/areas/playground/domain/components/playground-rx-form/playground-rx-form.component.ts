import { Component, OnInit } from '@angular/core';

import * as rx from 'app/infrastructure/shared-features/rx-forms';
import { SelectConfiguration } from 'app/infrastructure/widgets/select';

import { Country, Individual } from '../../models';
import { FormBuilder } from './form.builder';

@Component({
  selector: 'app-playground-rx-form',
  templateUrl: './playground-rx-form.component.html',
  styleUrls: ['./playground-rx-form.component.scss'],
  providers: [rx.FormValidationService]
})
export class PlaygroundRxFormComponent implements OnInit {
  public individuals = Individual.createSome();

  public individualSelectConfig = new SelectConfiguration('id', 'firstName');
  public dataForm: rx.FormWithValidation;
  public get countryEnum(): any {
    return Country;
  }

  public formData: string;

  constructor(
    private rxFormBuilder: rx.RxFormBuilder,
    private formValidationService: rx.FormValidationService,
    private validatorFactory: rx.ValidatorFactoryService
  ) { }

  ngOnInit() {
    this.dataForm = FormBuilder.buildForm(this.formValidationService, this.rxFormBuilder, this.validatorFactory);
  }

  public fillFormClicked(): void {
    const patrickStewart = this.individuals.find(f => f.firstName === 'Patrick');

    this.dataForm.formGroup.patchValue({
      emailControl: 'hello-there@gmx.ch',
      individualControl: patrickStewart,
      countryControl: 4
    });
  }

  public showDataClicked(): void {
    this.formData = JSON.stringify(this.dataForm.formGroup.value);
  }

  public getControlStatusDescription(controlName: string): string {
    const isValid = this.dataForm.formGroup.get(controlName)!.valid;
    const isDirty = this.dataForm.formGroup.get(controlName)!.dirty;
    const isTouched = this.dataForm.formGroup.get(controlName)!.touched;

    const result = `Valid: ${isValid}. Dirty: ${isDirty}. Touched: ${isTouched}.`;
    return result;
  }
}
