import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-world',
  imports: [],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent implements OnInit{
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    let svgCountryPaths = document.querySelectorAll<SVGPathElement>('path');

    Array.prototype.forEach.call(svgCountryPaths, (svgCountry: SVGPathElement) => {
      svgCountry.addEventListener('click', () => {
        document.querySelector("h3")?.classList.add("hide")
        this.loadCountryData(svgCountry);
      });
    });
  }
  loadCountryData(svgCountry: SVGPathElement) {
    this.dataService.getCountryData(svgCountry).subscribe({
      next: (data) => {
        let dataPath: any = data[1][0]

        let name: string = dataPath.name;
        document.getElementById('name')!.textContent = `Country: ${name}`;

        let capital: string = dataPath.capitalCity;
        document.getElementById('capital')!.textContent = `Capital: ${capital}`;

        let region: string = dataPath.region.value;
        document.getElementById('region')!.textContent = `Region: ${region}`;

        let income: string = dataPath.incomeLevel.value;
        document.getElementById('income')!.textContent = `Income: ${income}`;

        let longitude: string = dataPath.longitude;
        document.getElementById('longitude')!.textContent = `Longitude: ${longitude}`;

        let latitude: string = dataPath.latitude;
        document.getElementById('latitude')!.textContent = `Latitude: ${latitude}`;
      }
    })
  }
}

