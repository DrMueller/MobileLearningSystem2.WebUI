import { Component, OnInit, ApplicationRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ErrorInformation } from '../../models';

@Component({
  selector: 'app-error-display-content',
  templateUrl: './error-display-content.component.html',
  styleUrls: ['./error-display-content.component.scss']
})

export class ErrorDisplayContentComponent implements OnInit {
  public errorInformation: ErrorInformation = ErrorInformation.createEmpty();

  constructor(
    private activeModal: NgbActiveModal,
    private applicationRef: ApplicationRef) { }

  public initialize(errorInformation: ErrorInformation): void {
    this.errorInformation = errorInformation;
    this.applicationRef.tick(); // https://stackoverflow.com/questions/34827334/triggering-angular2-change-detection-manually
  }

  public closeModal(): void {
    this.activeModal.close();
  }

  ngOnInit() {
  }
}
