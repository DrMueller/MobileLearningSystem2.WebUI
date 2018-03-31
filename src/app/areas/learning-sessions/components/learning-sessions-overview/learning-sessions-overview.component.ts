import { Component, OnInit } from '@angular/core';

import { ToastService } from 'app/infrastructure/core-services/toast';
import {
  Grid, GridBuilderService
} from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';

import { LearningSessionsNavigationService } from '../../app-services';
import { LearningSessionsOverviewService, LearningSessionDataService } from '../../domain-services';
import { LearningSessionOverviewEntry } from '../../models';
import { GridBuilder } from './handlers';

import { ObjectUtils } from 'app/infrastructure/utils';

@Component({
  selector: 'app-learning-sessions-overview',
  templateUrl: './learning-sessions-overview.component.html',
  styleUrls: ['./learning-sessions-overview.component.scss']
})

export class LearningSessionsOverviewComponent implements OnInit {
  public grid: Grid<LearningSessionOverviewEntry>;

  public constructor(
    private gridBuilder: GridBuilderService,
    private navigationService: LearningSessionsNavigationService,
    private overviewService: LearningSessionsOverviewService,
    private dataService: LearningSessionDataService,
    private toastService: ToastService
  ) { }

  public canStartLearningSessionRun(): boolean {
    const selectedNodes = this.grid.gridOptions.api!.getSelectedNodes();
    return selectedNodes.length === 1;
  }

  public startLearningSessionRunClicked(): void {
    const selectedNode = this.grid.gridOptions.api!.getSelectedNodes()[0];
    if (!ObjectUtils.isNullOrUndefined(selectedNode)) {
      const selectedLearningSession = <LearningSessionOverviewEntry>selectedNode.data;
      this.navigationService.navigateToRun(selectedLearningSession.id);
    }
  }

  public async ngOnInit(): Promise<void> {
    this.grid = GridBuilder.buildGrid(this.gridBuilder);
    this.grid.gridOptions.onCellDoubleClicked = (event) => this.gridCellDoubleclicked(event);

    await this.loadGridDataAsync();
  }

  public async reloadLearningSessionClicked(): Promise<void> {
    await this.loadGridDataAsync();
  }

  public createLearningSessionClicked() {
    this.navigationService.navigateToEdit('-1');
  }

  public deleteLearningSessionClicked() {
    const selectedNodes = this.grid.gridOptions.api!.getSelectedNodes();
    selectedNodes.forEach(d => {
      const selectedLearningSession = <LearningSessionOverviewEntry>d.data;
      this.dataService.deleteLearningSessionAsync(selectedLearningSession.id!);
    });

    this.grid.gridOptions.api!.removeItems(selectedNodes);
  }

  public editLearningSessionClicked() {
    const selectedNodes = this.grid.gridOptions.api!.getSelectedNodes();
    if (selectedNodes.length > 0) {
      const entry = <LearningSessionOverviewEntry>selectedNodes[0].data;
      this.navigationService.navigateToEdit(entry.id!);
    }
  }

  private async loadGridDataAsync(): Promise<void> {
    this.toastService.showInfoToast('Loading Sessions..');
    const overviewEntries = await this.overviewService.loadOverviewEntriesAsync();
    this.grid.initializeEntries(overviewEntries);
    this.toastService.showSuccessToast('Sessions loaded.');
  }

  private gridCellDoubleclicked($event: any): void {
    const entry = <LearningSessionOverviewEntry>$event.data;
    this.navigationService.navigateToEdit(entry.id!);
  }
}
