import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDComponent } from './quiz-d.component';

describe('QuizDComponent', () => {
  let component: QuizDComponent;
  let fixture: ComponentFixture<QuizDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
