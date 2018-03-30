import { IGridOptionsBuilderService } from '../interfaces';
import { Grid } from '../models';

export interface IGridBuilderService {
  startBuildingOptions(): IGridOptionsBuilderService;
  buildGrid<T extends object>(): Grid<T>;
}
