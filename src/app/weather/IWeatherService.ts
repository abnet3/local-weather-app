import { Observable } from "rxjs/internal/Observable";

import { ICurrentWeather } from "../interfaces";

export interface IWeatherService {
  getCurrentWeather(
    city: string,
    country: string
  ): Observable<ICurrentWeather>
}
