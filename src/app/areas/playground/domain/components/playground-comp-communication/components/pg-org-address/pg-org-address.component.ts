import { Component, OnInit } from '@angular/core';

import { MediatorBuilderService } from 'app/infrastructure/core-services/mediation';

import { Address, Organisation } from '../../models';

@Component({
  selector: 'app-pg-org-address',
  templateUrl: './pg-org-address.component.html',
  styleUrls: ['./pg-org-address.component.scss']
})
export class PgOrgAddressComponent implements OnInit {

  constructor(private organisationBuilder: MediatorBuilderService<Organisation>) { }

  ngOnInit() {
    this.organisationBuilder.subsribeBuildStep((org: Organisation) => {
      org.address = this.createAddress();
    });
  }

  private createAddress(): Address {
    return new Address('Fakestreet 123', 'Fake Town');
  }
}
