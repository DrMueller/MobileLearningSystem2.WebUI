import { Component, OnInit } from '@angular/core';

import { MediatorBuilderService } from 'app/infrastructure/core-services/mediation';

import { HeadQuarter, Organisation } from '../../models';

@Component({
  selector: 'app-pg-org-hq',
  templateUrl: './pg-org-hq.component.html',
  styleUrls: ['./pg-org-hq.component.scss']
})
export class PgOrgHqComponent implements OnInit {

  constructor(private organisationBuilder: MediatorBuilderService<Organisation>) { }

  ngOnInit() {
    this.organisationBuilder.subsribeBuildStep(org => {
      org.headQuarter = this.createHeadQuarter();
    });
  }

  public createHeadQuarter(): HeadQuarter {
    return new HeadQuarter('HQ Fribourg', 'Grande Place');
  }
}
