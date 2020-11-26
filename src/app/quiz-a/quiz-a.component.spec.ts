import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAComponent } from './quiz-a.component';

describe('QuizAComponent', () => {
  let component: QuizAComponent;
  let fixture: ComponentFixture<QuizAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
