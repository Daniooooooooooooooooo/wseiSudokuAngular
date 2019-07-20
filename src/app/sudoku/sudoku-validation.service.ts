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
    console.log('result1: ' + result);
    if (result) {
      result = this.checkRows(sudokuContent);
      console.log('result:2 ' + result);
    }
    if (result) {
      result = this.checkColumns(sudokuContent);
      console.log('result3: ' + result);
    }
    if (result) {
      result = this.checkBlocks(sudokuContent);
      console.log('result4: ' + result);
    }
    console.log('result: ' + result);
    return result;
  }

  checkIfFilled(sudoku: Sudoku) {
    let result = true;
    for (let index = 0; index < 9; index++) {
      let row = sudoku.getRow(index);
      result = row.every(element => {
          return element >= 1 && element <= 9;
      });
      if (result === false) {
        break;
      }
    }
    return result;
  }

  checkRows(sudoku: Sudoku) {
    let result = true;
    for (let index = 0; index < 9; index++) {
      let rowSet = new Set();
      let row = sudoku.getRow(index);
      result = !row.some(element => {
        if (rowSet.has(element)) {
          return true;
        }
        rowSet.add(element);
      });
      return result;
    }
  }

  checkColumns(sudoku: Sudoku) {
    let result = true;
    for (let index = 0; index < 9; index++) {
      let columnSet = new Set();
      let column = sudoku.getColumn(index);
      result = !column.some(element => {
        if (columnSet.has(element)) {
          return true;
        }
        columnSet.add(element);
      });
      return result;
    }
  }

  checkBlocks(sudoku: Sudoku) {
    let result = true;
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
      let blockSet = new Set();
      let block = sudoku.getBlock(x, y);
      result = !block.some(element => {
        if (blockSet.has(element)) {
          return true;
        }
        blockSet.add(element);
      });
      return result;
      }
    }
  }

}

