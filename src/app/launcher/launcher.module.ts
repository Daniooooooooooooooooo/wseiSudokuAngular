import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LauncherComponent } from './launcher.component';
import { LauncherRoutingModule } from './launcher-routing.module';
import {MatSelectModule} from '@angular/material/select';
import { CoreModule } from '../core/core.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LauncherComponent],
  imports: [
    CommonModule,
    LauncherRoutingModule,
    MatSelectModule,
    CoreModule,
    MatButtonModule
  ]
})
export class LauncherModule { }
