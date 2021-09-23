import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { WeatherEnum } from '../shared/weather-enum';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})


export class ServiceService {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    });
  }

  
  getCountriesForDropdown() {
     return this.http.get(WeatherEnum.JSONPATH);
  }

  getWeatherData(form: FormGroup) : Observable<any> {
    const CITY = form.get(WeatherEnum.CITY)?.value;
    const COUNTRY = form.get(WeatherEnum.COUNTRY)?.value;
    return this.http.get(environment.apiURL + environment.getURL + 'cityName=' + CITY + '&countryCode=' + COUNTRY );
  }

  getHistoryData(city: string, country: string) : Observable<any> {
    return this.http.get(environment.apiURL + environment.getHistoryURL + `${WeatherEnum.CITY}=` + city + `&${WeatherEnum.COUNTRYFILTER}=` + country)
  }

  postToHistory(weather: any) : Observable<any> {
    return this.http.post(environment.apiURL + environment.postURL, weather)
  }

}
