export class Address {
  public streetName: string | undefined = undefined;

  public streetNumber: number | undefined = undefined;

  public getCompleteStreet(): string {
    return `StreetName: ${this.streetName}. StreetNumber: ${this.streetNumber}`;
  }
}
