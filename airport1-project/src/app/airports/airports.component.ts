import { Component, OnInit } from "@angular/core";
import { Airport } from "../airport";
import { AIRPORTS } from "../airport-data";

@Component({
  selector: "app-airports",
  templateUrl: "./airports.component.html",
  styleUrls: ["./airports.component.scss"]
})
export class AirportsComponent implements OnInit {
  airports = AIRPORTS;
  selectedAirport: Airport;

  constructor() {}

  ngOnInit() {}

  onSelect(airport: Airport): void {
    this.selectedAirport = airport;
  }
}
