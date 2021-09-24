import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormsService } from 'src/app/services/forms.service';
import { ServiceService } from 'src/app/services/service.service';
import { Countries } from 'src/app/shared/interfaces/countries';
import { WeatherHistory } from 'src/app/shared/interfaces/weather-history';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {

  private subscription$1!: Subscription;
  private subscription$2!: Subscription;
  private subscription$3!: Subscription;
  private subscription$4!: Subscription;

  public countries: any = [];
  public countrySelected!: Countries;
  public city: string = '';
  public weatherData: any = [];
  public weatherDataHistory!: Array<WeatherHistory>;
  public weatherFormGroup!: FormGroup;
  public showSpinner: boolean = false;


  constructor(private services: ServiceService, private formService: FormsService) { }


  ngOnInit(): void {
    this.getCountries();
    this.weatherFormGroup = this.formService.initializeFormGroup();

  }

  ngOnDestroy(): void {
    this.subscription$1.unsubscribe();
    this.subscription$2.unsubscribe();
    this.subscription$3.unsubscribe();
    this.subscription$4.unsubscribe();
  }

  getCountries() {
    this.subscription$1 = this.services.getCountriesForDropdown().subscribe(response => {
      this.countries = response;
    },
      error => {
        this.services.openSnackBar("An error ocurred!");
      });
  }


  selectedCountry(item: Countries) {
    this.countrySelected = item;
  }

  getWeatherData() {
    if (this.weatherFormGroup.valid) {
      this.showSpinner = true;
      this.subscription$2 = this.services.getWeatherData(this.weatherFormGroup).subscribe(response => {
        this.showSpinner = false;
        if (this.weatherFormGroup.get('history')?.value) {
          this.getWeatherHistory();
        }
        this.city = this.weatherFormGroup.get('city')?.value;
        this.weatherData = response;
        const parameters: WeatherHistory = {
          "pais": this.countrySelected.name,
          "ciudad": this.weatherFormGroup.get('city')?.value,
          "clima": response.main.temp.toString(),
          "sensacionTermica": response.main.feels_like.toString()
        }
        this.subscription$3 = this.services.postToHistory(parameters).subscribe();

      },
        error => {
          this.services.openSnackBar("An error ocurred!");
          this.showSpinner = false;
        })

    }
  }

  getWeatherHistory() {
    this.showSpinner = true;
    this.subscription$4 = this.services.getHistoryData(this.weatherFormGroup.get('city')?.value, this.countrySelected.name).subscribe((response: Array<WeatherHistory>) => {
      this.weatherDataHistory = response;
      this.showSpinner = false;
    },
      error => {
        this.services.openSnackBar("An error ocurred!");
        this.showSpinner = false;
      })
  }

}
