import { Component, OnInit } from '@angular/core';

import { ToastService } from 'app/infrastructure/core-services/toast';
import * as rx from 'app/infrastructure/shared-features/rx-forms';

import { Individual } from '../../models';
import { PlaygroundIndividualService } from '../../services';
import { FormBuilder } from './form.builder';

@Component({
  selector: 'app-playground-server-post',
  templateUrl: './playground-server-post.component.html',
  styleUrls: ['./playground-server-post.component.scss']
})
export class PlaygroundServerPostComponent implements OnInit {
  public dataForm: rx.FormWithValidation;

  constructor(
    private rxFormBuilder: rx.RxFormBuilder,
    private formValidationService: rx.FormValidationService,
    private validatorFactory: rx.ValidatorFactoryService,
    private toastService: ToastService,
    private playgroundIndividualService: PlaygroundIndividualService
  ) { }

  ngOnInit() {
    this.dataForm = FormBuilder.buildForm(this.formValidationService, this.rxFormBuilder, this.validatorFactory);
  }

  public async createIndividualClicked(): Promise<void> {
    const individual = new Individual();
    this.dataForm.setModelFromControls(individual);

    const createdIndividual = await this.playgroundIndividualService.postIndividualAsync();
    const successInfo = `Individual created with ID ${createdIndividual.id}`;
    this.toastService.showSuccessToast(successInfo, 'Individual created!');
  }
}
