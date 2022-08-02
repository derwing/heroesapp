import { Heroe } from './heroes/interfaces/heroes.interface';
import { Component } from '@angular/core';

// import * as heroes from "./../assets/json/db.json";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heroesApp';

}
