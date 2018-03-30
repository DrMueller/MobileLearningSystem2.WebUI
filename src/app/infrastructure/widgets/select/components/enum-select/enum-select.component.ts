import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SelectItem } from 'primeng/primeng';

import { EnumService } from 'app/infrastructure/core-services/enums';

@Component({
  selector: 'app-enum-select',
  templateUrl: './enum-select.component.html',
  styleUrls: ['./enum-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EnumSelectComponent),
      multi: true
    }
  ]
})

export class EnumSelectComponent implements ControlValueAccessor {

  @Output() public itemChanged = new EventEmitter<any>();
  public selectItems: SelectItem[];
  public selectedSelectItemId: number;

  public constructor(private enumService: EnumService) {
  }


  @Input() public set enumType(enumType: any) {
    const enumKeyValues = this.enumService.getKeyValues(enumType);

    this.selectItems = enumKeyValues.map(f => {
      const selectItem = <SelectItem>{
        label: f.value,
        value: f.key
      };

      return selectItem;
    });
  }

  @Input() public set selectedItem(value: number) {
    this.selectedSelectItemId = value;
  }

  public onItemChanged() {
    this.broadcastChange();
  }

  public registerOnChange(fn: any): void {
    this._formChangeCallback = fn;
    this.broadcastChange();
  }

  public registerOnTouched(): void { }

  public setDisabledState(): void { }

  public writeValue(obj: any): void {
    this.selectedSelectItemId = obj;
  }

  private broadcastChange(): void {
    this.itemChanged.emit(this.selectedSelectItemId);
    this._formChangeCallback(this.selectedSelectItemId);
  }

  private _formChangeCallback = (_: any) => { };
}
