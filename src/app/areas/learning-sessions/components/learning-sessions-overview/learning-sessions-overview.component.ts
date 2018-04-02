import { Component, OnInit } from '@angular/core';

import { ToastService } from 'app/infrastructure/core-services/toast';
import {
  Grid, GridBuilderService
} from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';
import { ObjectUtils } from 'app/infrastructure/utils';

import { LearningSessionsNavigationService } from '../../app-services';
import { LearningSessionOverviewService } from '../../domain-services';
import { LearningSession } from '../../models';
import { GridBuilder } from './handlers';

@Component({
  selector: 'app-learning-sessions-overview',
  templateUrl: './learning-sessions-overview.component.html',
  styleUrls: ['./learning-sessions-overview.component.scss']
})

export class LearningSessionsOverviewComponent implements OnInit {
  public grid: Grid<LearningSession>;

  public constructor(
    private gridBuilder: GridBuilderService,
    private navigationService: LearningSessionsNavigationService,
    private toastService: ToastService,
    private overviewService: LearningSessionOverviewService
  ) { }

  public async ngOnInit(): Promise<void> {
    this.grid = GridBuilder.buildGrid(this.gridBuilder);
    this.grid.gridOptions.onCellDoubleClicked = (event) => this.gridCellDoubleclicked(event);

    await this.loadGridDataAsync();
  }

  public async reloadLearningSessionClicked(): Promise<void> {
    await this.loadGridDataAsync();
  }

  public canStartLearningSessionRun(): boolean {
    const selectedNodes = this.grid.gridOptions.api!.getSelectedNodes();
    return selectedNodes.length === 1;
  }

  public createLearningSessionClicked() {
    this.navigationService.navigateToEdit('-1');
  }

  public deleteLearningSessionClicked() {
    const selectedNodes = this.grid.gridOptions.api!.getSelectedNodes();
    selectedNodes.forEach(d => {
      const selectedLearningSession = <LearningSession>d.data;
      this.overviewService.deleteLearningSessionAsync(selectedLearningSession.id!);
    });

    this.grid.gridOptions.api!.removeItems(selectedNodes);
  }

  public editLearningSessionClicked() {
    const selectedNodes = this.grid.gridOptions.api!.getSelectedNodes();
    if (selectedNodes.length > 0) {
      const entry = <LearningSession>selectedNodes[0].data;
      this.navigationService.navigateToEdit(entry.id!);
    }
  }

  public startLearningSessionRunClicked(): void {
    const selectedNode = this.grid.gridOptions.api!.getSelectedNodes()[0];
    if (!ObjectUtils.isNullOrUndefined(selectedNode)) {
      const selectedLearningSession = <LearningSession>selectedNode.data;
      this.navigationService.navigateToRun(selectedLearningSession.id!);
    }
  }

  private async loadGridDataAsync(): Promise<void> {
    this.toastService.showInfoToast('Loading Sessions..');
    const learningSessions = await this.overviewService.loadAllLearningSessionsAsync();
    this.grid.initializeEntries(learningSessions);
    this.toastService.showSuccessToast('Sessions loaded.');
  }

  private gridCellDoubleclicked($event: any): void {
    const entry = <LearningSession>$event.data;
    this.navigationService.navigateToEdit(entry.id!);
  }
}
