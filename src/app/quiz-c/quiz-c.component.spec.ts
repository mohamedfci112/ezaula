import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCComponent } from './quiz-c.component';

describe('QuizCComponent', () => {
  let component: QuizCComponent;
  let fixture: ComponentFixture<QuizCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
