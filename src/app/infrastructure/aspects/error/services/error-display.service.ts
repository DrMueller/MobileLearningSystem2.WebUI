import { Injectable } from '@angular/core';

import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { ErrorInformation } from '../models';
import { ErrorDisplayContentComponent } from '../components';

@Injectable()
export class ErrorDisplayService {
  constructor(private modalService: NgbModal) {
  }

  public showError(errorInformation: ErrorInformation): void {
    const options = <NgbModalOptions>{
      backdrop: 'static',
      keyboard: true
    };

    const modalRef = this.modalService.open(ErrorDisplayContentComponent, options);
    const componentInstance = <ErrorDisplayContentComponent>modalRef.componentInstance;
    componentInstance.initialize(errorInformation);
  }
}
