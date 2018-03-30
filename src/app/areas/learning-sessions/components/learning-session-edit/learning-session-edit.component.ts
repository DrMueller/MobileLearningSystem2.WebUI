import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastService } from 'app/infrastructure/core-services/toast';
import {
  Grid, GridBuilderService
} from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';
import * as rx from 'app/infrastructure/shared-features/rx-forms';
import { Fact, FactDataService } from 'app/shared';

import { LearningSessionsNavigationService } from '../../app-services';
import { LearningSessionDataService } from '../../domain-services';
import { LearningSessionEdit } from '../../models';
import { FormBuilder, GridBuilder } from './handlers';

@Component({
  selector: 'app-learning-session-edit',
  templateUrl: './learning-session-edit.component.html',
  styleUrls: ['./learning-session-edit.component.scss']
})

export class LearningSessionEditComponent implements OnInit {
  public dataForm: rx.FormWithValidation;
  public grid: Grid<Fact>;
  private learningSession: LearningSessionEdit;

  public constructor(private route: ActivatedRoute,
    private rxFormBuilder: rx.RxFormBuilder,
    private formValidationService: rx.FormValidationService,
    private validatorFactory: rx.ValidatorFactoryService,
    private toastService: ToastService,
    private navigationService: LearningSessionsNavigationService,
    private sessionDataService: LearningSessionDataService,
    private gridBuilder: GridBuilderService,
    private factDataService: FactDataService
  ) { }

  public async ngOnInit(): Promise<void> {
    this.initializeDataForm();
    this.initializeRoutes();
    await this.initializeGridAsync();
  }

  public async saveAsync(): Promise<void> {
    this.dataForm.setModelFromControls(this.learningSession);

    await this.sessionDataService.saveLearningSessionAsync(this.learningSession);
    this.toastService.showSuccessToast('Session saved.');
    this.navigationService.navigateToOverview();
  }

  public cancelEditing(): void {
    this.navigationService.navigateToOverview();
  }

  private async initializeGridAsync(): Promise<void> {
    this.grid = GridBuilder.buildGrid(this.gridBuilder);
    this.grid.gridOptions.onCellDoubleClicked = (event) => this.gridCellDoubleclicked(event);

    this.grid.gridOptions.getRowStyle = (params: any) => {
      var fact = <Fact>params.data;
      if (this.learningSession.factIds.some(factId => {
        return factId === fact.id;
      })) {
        return { background: 'green' };
      }

      return undefined;
    };

    this.toastService.showInfoToast('Loading Facts..');
    var facts = await this.factDataService.loadAllFactsAsync();

    this.grid.entries.splice(0, this.grid.entries.length);
    this.grid.entries.push(...facts);
  }

  private gridCellDoubleclicked($event: any): void {
    const fact = <Fact>$event.data;

    var existingFactIndex = this.learningSession.factIds.indexOf(fact.id!);
    if (existingFactIndex === -1) {
      this.learningSession.factIds.push(fact.id!);
    } else {
      this.learningSession.factIds.splice(existingFactIndex, 1);
    }

    var nodes = [$event.node];
    this.grid.gridOptions.api!.refreshRows(nodes);
  }

  private initializeDataForm(): void {
    this.dataForm = FormBuilder.buildForm(
      this.formValidationService,
      this.rxFormBuilder,
      this.validatorFactory);
  }

  private initializeRoutes(): void {
    this.route.data.subscribe(data => {
      this.learningSession = <LearningSessionEdit>data['learningSession'] || new LearningSessionEdit();
      this.dataForm.setControlDataFromModel(this.learningSession);
    });
  }
}
