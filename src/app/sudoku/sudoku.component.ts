import { Component, OnInit } from '@angular/core';
import { Sudoku } from './sudoku';
import { SudokuValidationService } from './sudoku-validation.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent implements OnInit {
  public sudoku: Sudoku;
  constructor(
    private sudokuValidator: SudokuValidationService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.sudoku = new Sudoku();
    console.log(this.sudoku);
    let sudokuId = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.getSudoku(+sudokuId).subscribe((sud: any) => {
      this.sudoku.initValues(sud.content);
    });

  }

  check() {
    this.sudokuValidator.validate(this.sudoku);
  }
}
