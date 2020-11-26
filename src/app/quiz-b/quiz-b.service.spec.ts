import { TestBed } from '@angular/core/testing';

import { QuizBService } from './quiz-b.service';

describe('QuizBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizBService = TestBed.get(QuizBService);
    expect(service).toBeTruthy();
  });
});
