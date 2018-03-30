import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedControl } from '../../models';

import { FormValidationErrorDisplayComponent } from './form-validation-error-display.component';

describe('FormValidationErrorDisplayComponent', () => {
  let component: FormValidationErrorDisplayComponent;
  let fixture: ComponentFixture<FormValidationErrorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormValidationErrorDisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const mockValidatedControl = new ValidatedControl('', null);

    fixture = TestBed.createComponent(FormValidationErrorDisplayComponent);
    component = fixture.componentInstance;
    component.validatedControl = mockValidatedControl;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
