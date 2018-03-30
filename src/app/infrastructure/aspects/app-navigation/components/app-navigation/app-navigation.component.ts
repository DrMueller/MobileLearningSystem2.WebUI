import { Component, OnInit } from '@angular/core';

import { AppNavigationEntry } from '../../models';
import { AppNavigationService } from '../../services';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
  public get applicationTitle(): string {
    return 'MLS 2';
  }

  public appNavigationEntries: AppNavigationEntry[] = [];

  constructor(private appNavigationService: AppNavigationService) { }

  ngOnInit() {
    this.appNavigationEntries = this.appNavigationService.getNavigationEntries();
  }

}
