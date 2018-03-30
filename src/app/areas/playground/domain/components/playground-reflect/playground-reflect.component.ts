import { Component, OnInit } from '@angular/core';

import { ObjectFactoryService } from 'app/infrastructure/core-services/object-creation';

import { Organisation, Individual } from '../../models';

@Component({
  selector: 'app-playground-reflect',
  templateUrl: './playground-reflect.component.html',
  styleUrls: ['./playground-reflect.component.scss']
})
export class PlaygroundReflectComponent implements OnInit {

  public organisation: Organisation;

  constructor(private objFactoryService: ObjectFactoryService) { }

  ngOnInit() {
    const org = this.createOrg();
    this.organisation = this.objFactoryService.create(org, Organisation);
  }

  public get organisationIndividuals(): Individual[] {
    return this.organisation.individuals!;
  }

  public get individualAddress2CompleteStreet(): string {
    return this.organisation!.individual!.address2!.getCompleteStreet();
  }

  public get individualAddressCompleteStreet(): string {
    return this.organisation!.individual!.address!.getCompleteStreet();
  }

  public get individualFullName(): string {
    return this.organisation!.individual!.fullName;
  }

  private createOrg(): Organisation {
    const result: any = new Object();
    result.coName = 'Co123';
    result.name = 'Fake Org 321';
    result.individual = new Object();
    result.individual.firstName = 'Matthias';
    result.individual.lastName = 'Müller';
    result.individual.id = '1234';

    result.individual.address = new Object();
    result.individual.address.streetName = 'Fakestreet';

    result.individual.address2 = new Object();
    result.individual.address2.streetName = 'Street 2';
    result.individual.address2.streetNumber = 'Number 2';

    result.individuals = [];
    result.individuals.push({
      firstName: 'Jaime',
      lastName: 'Lannister',
      id: '467'
    });

    result.individuals.push({
      firstName: 'Joe',
      lastName: 'Abercombie',
      id: '5789'
    });

    return result;
  }
}
