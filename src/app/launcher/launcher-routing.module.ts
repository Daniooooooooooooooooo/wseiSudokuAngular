import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LauncherComponent } from './launcher.component';


const routes: Routes = [
  { path: 'launcher', component: LauncherComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LauncherRoutingModule { }
