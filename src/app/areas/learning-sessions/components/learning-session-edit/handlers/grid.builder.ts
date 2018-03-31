import {
  Grid, GridBuilderService, RowSelectionType, GetRowStyleCallback
} from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';

import { Fact } from 'app/shared';

export class GridBuilder {
  public static buildGrid(gridBuilder: GridBuilderService, getRowStyleCallback: GetRowStyleCallback<Fact>): Grid<Fact> {
    const result = gridBuilder
      .startBuildingOptions()
      .withRowStyleCallback(getRowStyleCallback)
      .withAnimatedRows(true)
      .withRowSelectionType(RowSelectionType.Multiple)
      .withAutoSizeColumns(true)
      .startBuildingColumnDefinition('Created', 'creationDate')
      .startBuildingColumnSize()
      .withWidth(150)
      .withSuppressSorting(true)
      .buildColumnDefinition()
      .startBuildingColumnDefinition('Question', 'questionText')
      .startBuildingColumnSize()
      .withFitSoSize()
      .withSuppressMenu(false)
      .buildColumnDefinition()
      .buildGridOptions()
      .buildGrid<Fact>();

    return result;
  }
}
