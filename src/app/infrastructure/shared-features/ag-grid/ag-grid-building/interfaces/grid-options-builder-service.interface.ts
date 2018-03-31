import { RowSelectionType } from '../models';
import { GetRowStyleCallback } from '../types';
import { IColumnDefinitionBuilderService } from './column-definition-builder-service.interface';
import { IGridBuilderService } from './grid-builder-service.interface';

export interface IGridOptionsBuilderService {
  startBuildingColumnDefinition(headerName: string, fieldName: string): IColumnDefinitionBuilderService;
  withAnimatedRows(doAnimate: boolean): IGridOptionsBuilderService;
  withRowStyleCallback<T>(callback: GetRowStyleCallback<T>): IGridOptionsBuilderService;
  withRowSelectionType(type: RowSelectionType): IGridOptionsBuilderService;
  withEnableSorting(doEnable: boolean): IGridOptionsBuilderService;
  withEnableColResize(doEnable: boolean): IGridOptionsBuilderService;
  withAutoSizeColumns(doAutosize: boolean): IGridOptionsBuilderService;
  buildGridOptions(): IGridBuilderService;
}
