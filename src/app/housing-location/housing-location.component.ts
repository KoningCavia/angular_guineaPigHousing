import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation} from "../housinglocation";
import { RouterModule} from "@angular/router";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{ housingLocation.name }}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state}}</p>
<!--      this relates to the router (routes.ts) where /details refers to the static part of the route (or link) and housingLocation.id refers to the dynamic data for the link -->
<!--      weird [routerlink] werkt alleen als er ergens een space ruimte is, anders doet ie het niet. even vragen bij Peter?TODO-->
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

}
