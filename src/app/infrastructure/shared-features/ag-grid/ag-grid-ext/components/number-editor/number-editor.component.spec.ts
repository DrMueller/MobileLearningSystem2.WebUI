import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NumberEditorComponent } from './number-editor.component';

describe('NumberEditorComponent', () => {
  let component: NumberEditorComponent;
  let fixture: ComponentFixture<NumberEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumberEditorComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
