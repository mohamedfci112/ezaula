import { TestBed } from '@angular/core/testing';

import { QuizDService } from './quiz-d.service';

describe('QuizDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizDService = TestBed.get(QuizDService);
    expect(service).toBeTruthy();
  });
});
