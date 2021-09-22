import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})


export class WeatherDataComponent implements AfterViewInit {

   @Input() weatherDataList: any = [];

  displayedColumns: string[] = ['country', 'city', 'temperature', 'realFeel'];
  //dataSource = new MatTableDataSource(this.weatherDataList);

  @ViewChild(MatSort) sort: MatSort = new MatSort;

  constructor() { }


  ngAfterViewInit() {
    this.weatherDataList.sort = this.sort;
  }
}


