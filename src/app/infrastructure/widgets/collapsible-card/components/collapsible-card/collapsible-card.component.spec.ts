import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CollapsibleCardComponent } from './collapsible-card.component';

describe('CollapsibleCardComponent', () => {
  let component: CollapsibleCardComponent;
  let fixture: ComponentFixture<CollapsibleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsibleCardComponent],
      imports: [NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
