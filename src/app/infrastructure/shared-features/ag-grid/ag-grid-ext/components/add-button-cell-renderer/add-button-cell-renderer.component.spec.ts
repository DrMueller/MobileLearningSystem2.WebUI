import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonCellRendererComponent } from './add-button-cell-renderer.component';

describe('AddButtonCellRendererComponent', () => {
  let component: AddButtonCellRendererComponent;
  let fixture: ComponentFixture<AddButtonCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddButtonCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddButtonCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
