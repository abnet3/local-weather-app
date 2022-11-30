import { Observable, of } from 'rxjs';

import { ICurrentWeather } from './../interfaces';
import { IWeatherService } from './IWeatherService';

export const fakeWeather: ICurrentWeather = {
  city: 'Bethesda',
  country: 'US',
  date: 1285789600,
  image: '',
  temperature: 280.32,
  description: 'light intenity drizzle'
}

export class WeatherServiceFake implements IWeatherService {
  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(fakeWeather);
  }
}
