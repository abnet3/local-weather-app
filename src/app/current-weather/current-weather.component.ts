import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from './../interfaces';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current!: ICurrentWeather;

  constructor() {

    this.current = {
      city: 'Bethesda',
      country: 'US',
      date: new Date(),
      image: 'https://res.cloudinary.com/prana-events/image/upload/v1668513932/local-weather-app/sunny_fxvixl.jpg',
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather;
  }

  ngOnInit(): void {
  }

}
