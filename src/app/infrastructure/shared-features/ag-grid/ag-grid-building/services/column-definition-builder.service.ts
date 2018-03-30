import { ColDef } from 'ag-grid';

import {
  IColumnDefinitionBuilderService, IColumnSizeBuilderService, IGridOptionsBuilderService
} from '../interfaces';
import { ColumnSizeBuilderService } from './column-size-builder.service';

export class ColumnDefinitionBuilderService implements IColumnDefinitionBuilderService {
  private readonly _colDef: ColDef;

  constructor(
    private gridOptionsBuilderService: IGridOptionsBuilderService,
    private colDefs: ColDef[],
    headerName: string,
    fieldName: string) {

    this._colDef = <ColDef>{};
    this._colDef.headerName = headerName;
    this._colDef.field = fieldName;
    this.setColDefDefaults();
  }

  public withCellStyleObject(styleObj: {}): IColumnDefinitionBuilderService {
    this._colDef.cellStyle = styleObj;
    return this;
  }

  public startBuildingColumnSize(): IColumnSizeBuilderService {
    const colSizeBuilder = new ColumnSizeBuilderService(this, this._colDef);
    return colSizeBuilder;
  }

  public withSuppressSizeToFit(doSuppress: boolean): IColumnDefinitionBuilderService {
    this._colDef.suppressSizeToFit = doSuppress;
    return this;
  }

  public withSuppressMenu(doSuppress: boolean): IColumnDefinitionBuilderService {
    this._colDef.suppressMenu = doSuppress;
    return this;
  }

  public withSuppressSorting(doSuppress: boolean): IColumnDefinitionBuilderService {
    this._colDef.suppressSorting = doSuppress;
    return this;
  }

  public buildColumnDefinition(): IGridOptionsBuilderService {
    this.colDefs.push(this._colDef);
    return this.gridOptionsBuilderService;
  }

  private setColDefDefaults(): void {
    this._colDef.cellStyle = { 'border-style': 'none' };
    this._colDef.suppressMenu = true;
    this._colDef.suppressSorting = true;
    this._colDef.suppressSizeToFit = false;
  }
}
