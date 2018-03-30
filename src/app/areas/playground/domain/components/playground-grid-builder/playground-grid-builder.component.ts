import { Component, OnInit } from '@angular/core';

import {
    Grid, GridBuilderService
} from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';

import { Individual } from '../../models';
import { GridBuilder } from './grid.builder';

@Component({
  selector: 'app-playground-grid-builder',
  templateUrl: './playground-grid-builder.component.html',
  styleUrls: ['./playground-grid-builder.component.scss']
})
export class PlaygroundGridBuilderComponent implements OnInit {
  public grid: Grid<Individual>;

  constructor(
    private gridBuilder: GridBuilderService) {
  }

  ngOnInit() {
    this.grid = GridBuilder.buildGrid(this.gridBuilder);
    this.grid.entries.push(...Individual.createSome());
  }

  public removeRowClicked(): void {
    this.grid.entries.splice(0, 1);
  }

  public changePropertyClicked(): void {
    this.grid.entries[0].firstName = this.grid.entries[0].firstName + '2';
  }

  public changeAllClicked(): void {
    this.grid.entries.forEach(f => {
      f.lastName = f.lastName + ' Updated!';
    });
  }

  public addRowClicked(): void {
    const ind = new Individual();
    ind.lastName = 'Lannister';
    ind.firstName = 'Tyrion';
    ind.id = 'z1324';
    this.grid.entries.push(ind);
  }
}
