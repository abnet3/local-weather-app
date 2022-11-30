import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

import { ICurrentWeather } from './../interfaces';
import { ICurrentWeatherData } from './icurrent-weather-data';
import { IWeatherService } from './IWeatherService';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements IWeatherService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string) {

    const uriParams = new HttpParams()
      .set('q', `${city}, ${country}`)
      .set('appid', environment?.appId);

    return this.httpClient
      .get<ICurrentWeatherData>(
        `${environment.baseUrl}api.openweathermap.org/data/2.5/
weather?` , { params: uriParams }
      ).pipe(map(data => this.trasnformToIcurrentWeather(data)));
  }

  private trasnformToIcurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description


    }
  }
  private convertKelvinToFahrenheit(kelvin: number): number {
    return kelvin * 9 / 5 - 459.67
  }
}

