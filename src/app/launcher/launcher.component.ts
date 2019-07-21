import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.scss']
})
export class LauncherComponent implements OnInit {

  selected: any = 1;
  constructor(private dataService: DataService) { }
  sudokus: any;
  ngOnInit() {
    this.dataService.getSudokus().subscribe((data: any) => this.sudokus = data);
  }

  start() {
    
  }
}
