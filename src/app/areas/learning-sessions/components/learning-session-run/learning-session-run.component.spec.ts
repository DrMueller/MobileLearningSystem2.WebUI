import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningSessionRunComponent } from './learning-session-run.component';

describe('LearningSessionRunComponent', () => {
  let component: LearningSessionRunComponent;
  let fixture: ComponentFixture<LearningSessionRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningSessionRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningSessionRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
