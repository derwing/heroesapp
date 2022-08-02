import { Heroe } from './../../../../interfaces/heroes.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent {
  @Input() heroe!: Heroe;


}
