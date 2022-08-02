import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable, of } from 'rxjs';

import * as heroe from "../../../assets/json/db.json";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesList: any = heroe;
  private baseURL: String = environment.baseURL

  constructor(
    private http: HttpClient
  ) {

  }

  getHeroesOriginal(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseURL}/heroes`);
  }

  getHeroeByIDOriginal(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseURL}/heroes/${id}`);
  }

  getSuggestionOriginal(term: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseURL}/heroes?q=${term}&_limit=6`);
  }

  // LocalData
  getHeroesLocalDB(): Observable<Heroe[]> {
    return of(this.heroesList.heroes);

  }

  getHeroeByIDLocalDB(id: string): Observable<any> {
    let hero = {};
    const newList = [];
    newList.push(...this.heroesList.heroes);
    for (let index = 0; index < newList.length; index++) {
      const element = newList[index];
      if (element.id === id) {
        hero = element;
      }
    }
    return of(hero);
  }

  getSuggestionLocalDB(term: string): Observable<any[]> {
    let suggestions: any = [];
    const newList = [];
    newList.push(...this.heroesList.heroes);
    for (let index = 0; index < newList.length; index++) {
      const element = newList[index];
      if (element.superhero.includes(term.toUpperCase()) || element.superhero.includes(term.toLowerCase() || element.superhero.includes(term))) {
        suggestions.push(element);
        console.log(element);
      }
    }

    return of(suggestions)
  }

}
