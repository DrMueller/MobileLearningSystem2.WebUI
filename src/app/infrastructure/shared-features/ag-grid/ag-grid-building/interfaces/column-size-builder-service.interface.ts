import { IColumnDefinitionBuilderService } from './column-definition-builder-service.interface';

export interface IColumnSizeBuilderService {
  withWidth(width: number): IColumnDefinitionBuilderService;
  withFitSoSize(): IColumnDefinitionBuilderService;
}
