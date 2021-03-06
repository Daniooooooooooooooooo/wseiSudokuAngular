import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SudokuComponent } from './sudoku.component';


const routes: Routes = [
  { path: 'sudoku/:id', component: SudokuComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SudokuRoutingModule { }
