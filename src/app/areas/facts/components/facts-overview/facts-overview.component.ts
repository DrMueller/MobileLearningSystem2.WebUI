import { Component, OnInit } from '@angular/core';

import { ToastService } from 'app/infrastructure/core-services/toast';
import {
  Grid, GridBuilderService
} from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';
import { Fact, FactDataService } from 'app/shared';

import { FactsNavigationService } from '../../app-services';
import { GridBuilder } from './handlers';

@Component({
  selector: 'app-facts-overview',
  templateUrl: './facts-overview.component.html',
  styleUrls: ['./facts-overview.component.scss']
})

export class FactsOverviewComponent implements OnInit {
  public grid: Grid<Fact>;

  public constructor(
    private toastService: ToastService,
    private factDataService: FactDataService,
    private navigationService: FactsNavigationService,
    private gridBuilder: GridBuilderService) { }

  public async ngOnInit() {
    this.grid = GridBuilder.buildGrid(this.gridBuilder);
    this.grid.gridOptions.onCellDoubleClicked = (event) => this.gridCellDoubleclicked(event);

    await this.loadGridDataAsync();
  }

  public async reloadFactsClicked(): Promise<void> {
    await this.loadGridDataAsync();
  }

  public createFactClicked(): void {
    this.navigationService.navigateToFactEdit('-1');
  }

  public deleteFactsClicked(): void {
    const selectedNodes = this.grid.gridOptions.api!.getSelectedNodes();
    selectedNodes.forEach(d => {
      const selectedFact = <Fact>d.data;
      this.factDataService.deleteFactAsync(selectedFact.id!);
    });

    this.grid.gridOptions.api!.removeItems(selectedNodes);
  }

  public editFactClicked(): void {
    const selectedNodes = this.grid.gridOptions.api!.getSelectedNodes();
    if (selectedNodes.length > 0) {
      const entry = <Fact>selectedNodes[0].data;
      this.navigationService.navigateToFactEdit(entry.id!);
    }
  }

  private async loadGridDataAsync(): Promise<void> {
    this.toastService.showInfoToast('Loading Facts..');
    const facts = await this.factDataService.loadAllFactsAsync();
    this.grid.initializeEntries(facts);
  }

  private gridCellDoubleclicked($event: any): void {
    const entry = <Fact>$event.data;
    this.navigationService.navigateToFactEdit(entry.id!);
  }
}
