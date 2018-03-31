import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastService } from 'app/infrastructure/core-services/toast';
import * as rx from 'app/infrastructure/shared-features/rx-forms';
import { Fact, FactDataService } from 'app/shared';

import { FactsNavigationService } from '../../app-services';
import { FormBuilder } from './handlers';

@Component({
  selector: 'app-fact-edit',
  templateUrl: './fact-edit.component.html',
  styleUrls: ['./fact-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FactEditComponent implements OnInit {
  public dataForm: rx.FormWithValidation;
  private fact: Fact;

  public constructor(private route: ActivatedRoute,
    private rxFormBuilder: rx.RxFormBuilder,
    private formValidationService: rx.FormValidationService,
    private validatorFactory: rx.ValidatorFactoryService,
    private toastService: ToastService,
    private navigationService: FactsNavigationService,
    private factDataService: FactDataService
  ) { }

  public async saveFactAsync(): Promise<void> {
    this.dataForm.setModelFromControls(this.fact);

    await this.factDataService.saveFactAsync(this.fact);
    this.toastService.showSuccessToast('Fact saved.');
    this.navigationService.navigateToOverview();
  }

  public cancelEditing(): void {
    this.navigationService.navigateToOverview();
  }

  public ngOnInit() {
    this.dataForm = FormBuilder.buildForm(
      this.formValidationService,
      this.rxFormBuilder,
      this.validatorFactory);

    this.route.data.subscribe(data => {
      this.fact = <Fact>data['fact'] || new Fact();
      this.dataForm.setControlDataFromModel(this.fact);
    });
  }
}
