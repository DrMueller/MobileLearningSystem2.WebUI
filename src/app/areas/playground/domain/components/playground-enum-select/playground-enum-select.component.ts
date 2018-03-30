import { Component, OnInit } from '@angular/core';

import { ObjectUtils } from 'app/infrastructure/utils';

import { Country } from '../../models';

@Component({
  selector: 'app-playground-enum-select',
  templateUrl: './playground-enum-select.component.html',
  styleUrls: ['./playground-enum-select.component.scss']
})
export class PlaygroundEnumSelectComponent implements OnInit {

  public countryChangedText: string;
  public selectedCountry: Country;

  public get countryEnum(): any {
    return Country;
  }

  constructor() { }

  ngOnInit() {
  }

  public setSwitzerlandClicked(): void {
    this.selectedCountry = Country.Switzerland;
  }

  public countryChanged(country: Country): void {
    this.selectedCountry = country;
    if (ObjectUtils.isNullOrUndefined(country)) {
      this.countryChangedText = 'Country changed to undefined!';
    } else {
      this.countryChangedText = `Country changed to: ${Country[country!]}.`;
    }
  }
}
