import {Routes} from "@angular/router";
import { HomeComponent} from "./home/home.component";
import { DetailsComponent} from "./details/details.component";

// Router is basically conntroller
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'

  },
  {
    //here the :id means it is a variable that depends on the particular instance (like spring boot you know)
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
];

export default routeConfig;
