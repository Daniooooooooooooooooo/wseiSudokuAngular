import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SudokuComponent } from './sudoku.component';
import { SudokuRoutingModule } from './sudoku-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [SudokuComponent],
  imports: [
    CommonModule,
    SudokuRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SudokuModule { }
