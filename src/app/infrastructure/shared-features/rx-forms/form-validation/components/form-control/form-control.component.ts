import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ValidatedControl } from '../../models';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  @Input() public formGroup: FormGroup;
  @Input() public validatedControl: ValidatedControl;

  constructor() { }

  ngOnInit() {
  }
}
