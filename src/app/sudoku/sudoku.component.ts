import { Component, OnInit } from '@angular/core';
import { Sudoku } from './sudoku';
import { SudokuValidationService } from './sudoku-validation.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent implements OnInit {
  public sudoku: Sudoku;
  constructor(private sudokuValidator: SudokuValidationService) { }

  ngOnInit() {
    this.sudoku = new Sudoku();
    console.log(this.sudoku);
    this.sudoku.initValues('530070000600195000098000060800060003400803001700020006060000280000419005000080079');
  }

  check() {
    this.sudokuValidator.validate(this.sudoku);
  }
}
