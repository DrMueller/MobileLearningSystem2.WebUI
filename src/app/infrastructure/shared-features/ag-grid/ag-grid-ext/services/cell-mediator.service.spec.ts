import { TestBed, inject } from '@angular/core/testing';

import { CellMediatorService } from './cell-mediator.service';

describe('CellMediatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CellMediatorService]
    });
  });

  it('should create', inject([CellMediatorService], (service: CellMediatorService) => {
    expect(service).toBeTruthy();
  }));
});
