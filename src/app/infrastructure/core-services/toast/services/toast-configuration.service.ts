import { Injectable, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ToastConfigurationService {

  constructor(private toastsManager: ToastsManager) { }

  public setContainer(vcr: ViewContainerRef): void {
    this.toastsManager.setRootViewContainerRef(vcr);
  }
}
