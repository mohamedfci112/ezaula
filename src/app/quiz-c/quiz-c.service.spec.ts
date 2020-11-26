import { TestBed } from '@angular/core/testing';

import { QuizCService } from './quiz-c.service';

describe('QuizAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizCService = TestBed.get(QuizCService);
    expect(service).toBeTruthy();
  });
});
