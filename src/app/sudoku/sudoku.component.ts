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
    this.sudoku.initValues('534678912672195348198342567859761423426853791713924856961537284287419635345286179');
  }

  check() {
    this.sudokuValidator.validate(this.sudoku);
  }
}
