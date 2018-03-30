import { ColDef } from 'ag-grid';

import { IColumnDefinitionBuilderService, IColumnSizeBuilderService } from '../interfaces';

export class ColumnSizeBuilderService implements IColumnSizeBuilderService {
  constructor(private columnDefinitionBuilder: IColumnDefinitionBuilderService, private colDef: ColDef) {
  }

  withWidth(width: number): IColumnDefinitionBuilderService {
    this.colDef.width = width;
    this.colDef.suppressSizeToFit = true;
    return this.columnDefinitionBuilder;
  }
  withFitSoSize(): IColumnDefinitionBuilderService {
    this.colDef.suppressSizeToFit = false;
    return this.columnDefinitionBuilder;
  }
}
