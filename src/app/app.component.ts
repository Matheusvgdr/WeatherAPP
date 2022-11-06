import { Component, OnInit } from '@angular/core';
import { Root } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'wta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService){}

  cityName: string = "Wellington";
  weatherData?: Root;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = "";
      };

      onSubmit(){
        this.getWeatherData(this.cityName);
        this.cityName = "";
      };

      private getWeatherData(cityName: string){
        this.weatherService.getWeatherData(cityName).subscribe({next: (response) => {
          this.weatherData = response;
          console.log(response);
        }}) 
      };
  }


