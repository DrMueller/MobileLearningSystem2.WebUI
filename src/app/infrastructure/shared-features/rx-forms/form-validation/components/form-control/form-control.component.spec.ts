import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ValidatedControl } from '../../models';

import { FormControlComponent } from './form-control.component';

describe('FormControlComponent', () => {
  let component: FormControlComponent;
  let fixture: ComponentFixture<FormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormControlComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const mockFormGroup = new FormGroup({});
    const mockValidatedControl = new ValidatedControl('', null);

    fixture = TestBed.createComponent(FormControlComponent);
    component = fixture.componentInstance;
    component.formGroup = mockFormGroup;
    component.validatedControl = mockValidatedControl;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
