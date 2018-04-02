import {
  Grid, GridBuilderService, RowSelectionType
} from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';

import { LearningSession } from '../../../models';

export class GridBuilder {
  public static buildGrid(gridBuilder: GridBuilderService): Grid<LearningSession> {
    const result = gridBuilder
      .startBuildingOptions()
      .withRowSelectionType(RowSelectionType.Multiple)
      .withAutoSizeColumns(true)
      .startBuildingColumnDefinition('Name', 'sessionName')
      .startBuildingColumnSize()
      .withFitSoSize()
      .withSuppressMenu(false)
      .buildColumnDefinition()
      .buildGridOptions()
      .buildGrid<LearningSession>();

    return result;
  }
}
