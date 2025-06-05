import { Component } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-map-comp',
  imports: [],
  templateUrl: './map-comp.component.html',
  styleUrl: './map-comp.component.css'
})
export class MapCompComponent {

  selectedCountryData: any = {
    name: '',
    capitalCity: '',
    region: '',
    incomeLevel: '',
    longitude: '',
    latitude: ''
  };

  constructor(private countryService: CountryService) { }

  handleClick(event: any) {
    const clicked = event.target;
    if (clicked.tagName === 'path') {
      const code = clicked.id;
      this.getCountryDetails(code);
    }
  }

  getCountryDetails(code: string) {
    this.countryService.fetchCountry(code).subscribe(response => {
      const info = response[1][0];
      this.selectedCountryData = {
        name: info.name,
        capitalCity: info.capitalCity,
        region: info.region.value,
        incomeLevel: info.incomeLevel.value,
        longitude: info.longitude,
        latitude: info.latitude
      };
    });
  }
}