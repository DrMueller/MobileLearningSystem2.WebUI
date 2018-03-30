import { Component, OnInit } from '@angular/core';

import { MediatorBuilderService } from 'app/infrastructure/core-services/mediation';

import { Organisation, OrganisationCore } from '../../models';

@Component({
  selector: 'app-pg-org-main',
  templateUrl: './pg-org-main.component.html',
  styleUrls: ['./pg-org-main.component.scss'],
  providers: [MediatorBuilderService]
})
export class PgOrgMainComponent implements OnInit {

  public organisation: Organisation;

  constructor(private organisationBuilder: MediatorBuilderService<Organisation>) {
  }

  ngOnInit() {
    this.organisationBuilder.subsribeBuildStep(org => {
      org.core = this.createCoreData();
    });
  }

  public getDataClicked(): void {
    this.organisation = this.organisationBuilder.startBuilding(Organisation);
  }

  public createCoreData(): OrganisationCore {
    return new OrganisationCore('DrMuellers Fake', 'Therpary');
  }
}
