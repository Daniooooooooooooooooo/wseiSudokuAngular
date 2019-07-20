import { Injectable } from '@angular/core';
import { Sudoku } from './sudoku';

@Injectable({
  providedIn: 'root'
})
export class SudokuValidationService {

  constructor() { }

  validate(sudokuContent: Sudoku) {
    console.log('Checking...');
    let result = this.checkIfFilled(sudokuContent);
    if (result) {
      result = this.checkRows(sudokuContent);
    }
    if (result) {
      result = this.checkColumns(sudokuContent);
    }
    if (result) {
      result = this.checkBlocks(sudokuContent);
    }
    console.log('result: ' + result);
    return result;
  }

  checkIfFilled(sudoku: Sudoku) {
    let result = true;
    for (let index = 0; index < 9; index++) {
      let row = sudoku.getRow(index);
      row.forEach(element => {
        result = element >= 1 && element <= 9;
      });
    }
    return result;
  }

  checkRows(sudoku: Sudoku) {
    for (let index = 0; index < 9; index++) {
      let rowSet = new Set();
      let row = sudoku.getRow(index);
      row.forEach(element => {
        if (rowSet.has(element)) {
          return false;
        }
        rowSet.add(element);
      });
      return true;
    }
  }

  checkColumns(sudoku: Sudoku) {
    for (let index = 0; index < 9; index++) {
      let columnSet = new Set();
      let column = sudoku.getColumn(index);
      column.forEach(element => {
        if (columnSet.has(element)) {
          return false;
        }
        columnSet.add(element);
      });
      return true;
    }
  }

  checkBlocks(sudoku: Sudoku) {
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
      let blockSet = new Set();
      let block = sudoku.getBlock(x, y);
      block.forEach(element => {
        if (blockSet.has(element)) {
          return false;
        }
        blockSet.add(element);
      });
      return true;
      }
    }
  }

}

