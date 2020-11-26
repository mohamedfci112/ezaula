import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBComponent } from './quiz-b.component';

describe('QuizBComponent', () => {
  let component: QuizBComponent;
  let fixture: ComponentFixture<QuizBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
