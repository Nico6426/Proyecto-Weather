import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormsService } from 'src/app/services/forms.service';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {



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
    this.services.getIso3166().subscribe(response => {
      this.countries = response[1];
    });
  }


  selectedCountry(item: any) {
    this.countrySelected = item;
  }

  getWeatherData() {
    if (this.weatherFormGroup.valid) {
      this.services.getWeatherData(this.weatherFormGroup).subscribe(response => {
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
        this.services.postToHistory(parameters).subscribe();
      });

    }
  }

  getWeatherHistory() {
    this.services.getHistoryData(this.weatherFormGroup.get('city')?.value, this.countrySelected.name).subscribe(response => {
      this.weatherDataHistory = response;
    })
  }

}
