import { Component, OnInit } from '@angular/core';
import { asyncScheduler, buffer, filter, fromEvent, throttleTime } from 'rxjs';

import { ICurrentWeather } from './../interfaces';
import { WeatherService } from '../weather/weather.service';

const throttleConfig = {
  leading: false,
  trailing: true
}
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current!: ICurrentWeather;


  constructor(private weatherService: WeatherService) {


  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Addis Ababa', 'ET').subscribe((data) => {
      console.log(data)
      this.current = data;
    }
    );

    const clicks$ = fromEvent(document, 'click');

    console.log(clicks$);

    clicks$.pipe(buffer(clicks$.pipe(throttleTime(250, asyncScheduler, throttleConfig))),
      filter(clickArray => clickArray.length === 2)).subscribe(() => window.alert('Are you sure?'))
  }



}
