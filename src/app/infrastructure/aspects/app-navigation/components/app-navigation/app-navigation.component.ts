import { Component, OnInit } from '@angular/core';

import { AppNavigationEntry } from '../../models';
import { AppNavigationService } from '../../services';

import { AppInfoDataService, ApplicationInformation } from 'app/infrastructure/core-services/app-info';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {

  public applicationInformation: ApplicationInformation
  public appNavigationEntries: AppNavigationEntry[] = [];

  constructor(
    private appNavigationService: AppNavigationService,
    private appInfoDataService: AppInfoDataService) { }

  public async ngOnInit(): Promise<void> {
    this.appNavigationEntries = this.appNavigationService.getNavigationEntries();
    this.applicationInformation = await this.appInfoDataService.getApplicationInformationAsync();
  }
}
