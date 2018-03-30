import { Component, OnInit } from '@angular/core';

import { Individual } from '../../models';
import { PlaygroundIndividualService } from '../../services';

@Component({
  selector: 'app-playground-server-get',
  templateUrl: './playground-server-get.component.html',
  styleUrls: ['./playground-server-get.component.scss']
})
export class PlaygroundServerGetComponent implements OnInit {
  public individuals: Individual[] = [];

  constructor(private playgroundIndividualService: PlaygroundIndividualService) { }

  ngOnInit() {
    this.getIndividualsAsync();
  }

  private async getIndividualsAsync(): Promise<void> {
    this.individuals = await this.playgroundIndividualService.getIndividualsAsync();
  }
}
