import { switchMap } from 'rxjs';
import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../interfaces/heroes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;
  isDC: boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService) { }

  ngOnInit(): any {
    // this.activateRoute.params.pipe(
    //   switchMap(({ id }) => this.heroesService.getHeroeByIDOriginal(id))
    // ).subscribe(heroe => this.heroe = heroe);

    this.activateRoute.params.pipe(
      switchMap(({ id }) => this.heroesService.getHeroeByIDLocalDB(id))
    ).subscribe(heroe => this.heroe = heroe);

    setTimeout(() => {
      this.getPublisher();
    }, 100);

  }

  getPublisher() {
    if (this.heroe.publisher === 'DC Comics') {
      this.isDC = true;
    }
  }

  back() {
    this.router.navigate(['/heroes/list'])
  }

}
