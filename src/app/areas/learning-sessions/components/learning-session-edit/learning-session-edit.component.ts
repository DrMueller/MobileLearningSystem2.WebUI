import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastService } from 'app/infrastructure/core-services/toast';
import {
  Grid, GridBuilderService, RowStyleObject
} from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';
import * as rx from 'app/infrastructure/shared-features/rx-forms';
import { Fact, FactDataService } from 'app/shared';

import { LearningSessionsNavigationService } from '../../app-services';
import { LearningSessionDataService } from '../../domain-services';
import { LearningSession } from '../../models';
import { FormBuilder, GridBuilder } from './handlers';

@Component({
  selector: 'app-learning-session-edit',
  templateUrl: './learning-session-edit.component.html',
  styleUrls: ['./learning-session-edit.component.scss']
})

export class LearningSessionEditComponent implements OnInit {
  public dataForm: rx.FormWithValidation;
  public grid: Grid<Fact>;
  private facts: Fact[];
  private learningSession: LearningSession;

  public constructor(private route: ActivatedRoute,
    private rxFormBuilder: rx.RxFormBuilder,
    private formValidationService: rx.FormValidationService,
    private validatorFactory: rx.ValidatorFactoryService,
    private toastService: ToastService,
    private navigationService: LearningSessionsNavigationService,
    private dataService: LearningSessionDataService,
    private gridBuilder: GridBuilderService,
    private factDataService: FactDataService
  ) {
  }

  public async ngOnInit(): Promise<void> {
    this.initializeDataForm();
    this.initializeRoutes();
    this.initializeGrid();
    await this.initializeGridDataAsync();
  }

  public async saveAsync(): Promise<void> {
    this.dataForm.setModelFromControls(this.learningSession);

    this.learningSession = await this.dataService.saveLearningSessionAsync(this.learningSession);
    await this.dataService.saveFactsAsync(this.learningSession.id!, this.facts);
    this.toastService.showSuccessToast('Session saved.');
    this.navigationService.navigateToOverview();
  }

  public cancelEditing(): void {
    this.navigationService.navigateToOverview();
  }

  public selectAllFacts(): void {
    this.grid.entries.forEach(fact => {
      if (this.facts.findIndex(f => f.id === fact.id) === -1) {
        this.facts.push(fact);
      }
    });

    this.grid.gridOptions.api!.refreshView();
  }

  private async initializeGridDataAsync(): Promise<void> {
    this.toastService.showInfoToast('Loading Facts..');
    const facts = await this.factDataService.loadAllFactsAsync();
    this.grid.initializeEntries(facts);
    await this.inizializeSelectedFactsAsync();
    this.grid.gridOptions.api!.refreshView();
    this.toastService.showSuccessToast('Facts loaded.');
  }

  private async inizializeSelectedFactsAsync(): Promise<void> {
    if (this.learningSession.id) {
      this.facts = await this.dataService.loadFactsAsync(this.learningSession.id);
    } else {
      this.facts = new Array<Fact>();
    }
  }

  private getGridRowStyle(row: RowStyleObject<Fact>): any {
    if (this.facts && this.facts.some(fact => {
      return fact.id === row.data.id;
    })) {
      return { background: 'green' };
    }

    return undefined;
  }

  private gridCellDoubleclicked($event: any): void {
    const fact = <Fact>$event.data;

    const existingFactIndex = this.facts.findIndex(f => {
      return f.id === fact.id;
    });

    if (existingFactIndex === -1) {
      this.facts.push(fact);
    } else {
      this.facts.splice(existingFactIndex, 1);
    }

    const nodes = [$event.node];
    this.grid.gridOptions.api!.refreshRows(nodes);
  }

  private initializeDataForm(): void {
    this.dataForm = FormBuilder.buildForm(
      this.formValidationService,
      this.rxFormBuilder,
      this.validatorFactory);
  }

  private initializeGrid(): void {
    this.grid = GridBuilder.buildGrid(this.gridBuilder, this.getGridRowStyle.bind(this));
    this.grid.gridOptions.onCellDoubleClicked = (event) => this.gridCellDoubleclicked(event);
  }

  private initializeRoutes(): void {
    this.route.data.subscribe(async data => {
      this.learningSession = <LearningSession>data['learningSession'] || new LearningSession();
      this.dataForm.setControlDataFromModel(this.learningSession);
    });
  }
}
