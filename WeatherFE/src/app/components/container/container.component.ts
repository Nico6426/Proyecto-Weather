import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormsService } from 'src/app/services/forms.service';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {

  subscription$1!: Subscription;
  subscription$2!: Subscription;
  subscription$3!: Subscription;
  subscription$4!: Subscription;

  ngOnDestroy(): void {
    this.subscription$1.unsubscribe();
    this.subscription$2.unsubscribe();
    this.subscription$3.unsubscribe();
    this.subscription$4.unsubscribe();
  }

  public countries: any = [];
  public countrySelected: any = '';
  public city: string = '';
  public weatherData: any = [];
  public history: boolean = false;
  public weatherDataHistory!: any;
  public weatherFormGroup!: FormGroup;

  constructor(private services: ServiceService, private formService: FormsService) { }


  ngOnInit(): void {
    this.getCountries();
    this.weatherFormGroup = this.formService.initializeFormGroup();

  }

  getCountries() {
    this.subscription$1 = this.services.getCountriesForDropdown().subscribe(response => {
      this.countries = response;
    },
      error => {
        this.services.openSnackBar("An error ocurred!");
      });
  }


  selectedCountry(item: any) {
    this.countrySelected = item;
  }

  getWeatherData() {
    if (this.weatherFormGroup.valid) {
      this.subscription$2 = this.services.getWeatherData(this.weatherFormGroup).subscribe(response => {
        if (this.weatherFormGroup.get('history')?.value) {
          this.getWeatherHistory();
        }
        this.city = this.weatherFormGroup.get('city')?.value;
        this.weatherData = response;
        const parameters = {
          "pais": this.countrySelected.name,
          "ciudad": this.weatherFormGroup.get('city')?.value,
          "clima": response.main.temp.toString(),
          "sensacionTermica": response.main.feels_like.toString()
        }
        this.subscription$3 = this.services.postToHistory(parameters).subscribe();

      },
        error => {
          this.services.openSnackBar("An error ocurred!");
        })

    }
  }

  getWeatherHistory() {
    this.subscription$4 = this.services.getHistoryData(this.weatherFormGroup.get('city')?.value, this.countrySelected.name).subscribe(response => {
      this.weatherDataHistory = response;
    },
      error => {
        this.services.openSnackBar("An error ocurred!");
      })
  }

}
