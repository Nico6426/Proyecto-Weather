import { Component, Input } from '@angular/core';
import { WeatherHistory } from 'src/app/shared/interfaces/weather-history';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})


export class WeatherDataComponent {

  @Input() weatherDataList!: Array<WeatherHistory>;

  displayedColumns: string[] = ['country', 'city', 'temperature', 'realFeel'];

  constructor() { }

}


