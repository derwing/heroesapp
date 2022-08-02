import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
  
  `
  ]
})
export class ListComponent implements OnInit {
  heroesList: Heroe[] = [];

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    // this.heroesService.getHeroesOriginal().subscribe((resp: Heroe[]) => {
    //   if (resp) {
    //     this.heroesList = resp;
    //   } else {
    //     return;
    //   }
    // })
    this.heroesService.getHeroesLocalDB().subscribe((resp: Heroe[]) => {
      if (resp) {
        this.heroesList = resp;
      } else {
        return;
      }
    })
  }

}
