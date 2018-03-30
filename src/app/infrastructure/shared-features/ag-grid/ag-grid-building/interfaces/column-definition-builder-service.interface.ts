import { IColumnSizeBuilderService } from './column-size-builder-service.interface';
import { IGridOptionsBuilderService } from './grid-options-builder-service.interface';

export interface IColumnDefinitionBuilderService {
  buildColumnDefinition(): IGridOptionsBuilderService;
  withCellStyleObject(styleObjs: {}): IColumnDefinitionBuilderService;
  withSuppressMenu(doSuppress: boolean): IColumnDefinitionBuilderService;
  withSuppressSorting(doSuppress: boolean): IColumnDefinitionBuilderService;
  startBuildingColumnSize(): IColumnSizeBuilderService;
}
