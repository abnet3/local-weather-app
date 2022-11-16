import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from './../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current!: ICurrentWeather;

  constructor(private weatherService: WeatherService) {

    // this.current = {
    //   city: 'Bethesda',
    //   country: 'US',
    //   date: new Date(),
    //   image: 'https://res.cloudinary.com/prana-events/image/upload/v1668513932/local-weather-app/sunny_fxvixl.jpg',
    //   temperature: 72,
    //   description: 'sunny',
    // } as ICurrentWeather;
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Addis Ababa', 'ET').subscribe((data) => {
      console.log(data)
      this.current = data;
    }
    );
  }

}
