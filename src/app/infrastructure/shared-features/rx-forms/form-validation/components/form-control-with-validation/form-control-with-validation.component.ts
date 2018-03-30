import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ValidatedControl } from '../../models';

@Component({
  selector: 'app-form-control-with-validation',
  templateUrl: './form-control-with-validation.component.html',
  styleUrls: ['./form-control-with-validation.component.scss']
})
export class FormControlWithValidationComponent implements OnInit {
  @Input() public validatedControl: ValidatedControl;
  @Input() public formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }
}
