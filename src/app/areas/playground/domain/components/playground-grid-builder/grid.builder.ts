import {
    Grid, GridBuilderService
} from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';

import { Individual } from '../../models';

export class GridBuilder {
  public static buildGrid(gridBuilder: GridBuilderService): Grid<Individual> {
    const result = gridBuilder
      .startBuildingOptions()
      .withAutoSizeColumns(true)
      .startBuildingColumnDefinition('ID', 'id')
      .startBuildingColumnSize()
      .withWidth(100)
      .buildColumnDefinition()
      .startBuildingColumnDefinition('First Name', 'firstName')
      .startBuildingColumnSize()
      .withWidth(200)
      .withCellStyleObject({ color: 'red', 'background-color': 'green' })
      .withSuppressMenu(false)
      .buildColumnDefinition()
      .startBuildingColumnDefinition('Last Name', 'lastName')
      .startBuildingColumnSize()
      .withFitSoSize()
      .withSuppressSorting(true)
      .buildColumnDefinition()
      .buildGridOptions()
      .buildGrid<Individual>();

    return result;
  }
}
