import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumSelectComponent } from './enum-select.component';

describe('EnumSelectComponent', () => {
  let component: EnumSelectComponent;
  let fixture: ComponentFixture<EnumSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnumSelectComponent],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
