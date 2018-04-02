import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ToastConfigurationService } from 'app/infrastructure/core-services/toast/services';

import { ErrorAppInitializationService } from '../error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    errorAppInitializationService: ErrorAppInitializationService,
    toastConfigurationService: ToastConfigurationService,
    viewContainerRef: ViewContainerRef) {
    errorAppInitializationService.initialize();
    toastConfigurationService.setContainer(viewContainerRef);
  }

  ngOnInit(): void {
  }
}
