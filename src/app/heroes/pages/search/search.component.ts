import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../interfaces/heroes.interface';
import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  term: string = '';
  filteredOptions: any;
  heroes: Heroe[] = [];
  heroeSelected: Heroe | undefined;
  noExist: boolean = false;

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
  }

  searching() {
    // this.heroesService.getSuggestionOriginal(this.term.trim()).subscribe(heroes => this.heroes = heroes);
    this.heroesService.getSuggestionLocalDB(this.term.trim()).subscribe(heroes => this.heroes = heroes);


  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (event.option.value === '') {
      this.heroeSelected = undefined
      return;
    }
    const heroe: Heroe = event.option.value;
    this.term = heroe.superhero;

    // this.heroesService.getHeroeByIDOriginal(heroe.id!).subscribe(heroe => this.heroeSelected = heroe);

    this.heroesService.getHeroeByIDLocalDB(heroe.id!).subscribe(heroe => this.heroeSelected = heroe);

  }



}
