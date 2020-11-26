import { TestBed } from '@angular/core/testing';

import { QuizAService } from './quiz-a.service';

describe('QuizAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizAService = TestBed.get(QuizAService);
    expect(service).toBeTruthy();
  });
});
