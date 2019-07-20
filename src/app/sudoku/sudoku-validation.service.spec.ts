import { TestBed } from '@angular/core/testing';

import { SudokuValidationService } from './sudoku-validation.service';

describe('SudokuValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SudokuValidationService = TestBed.get(SudokuValidationService);
    expect(service).toBeTruthy();
  });
});
