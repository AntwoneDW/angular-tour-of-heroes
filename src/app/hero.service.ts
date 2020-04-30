import { Injectable } from '@angular/core';
import { HEROES} from "./mock-heroes";
import {Hero} from "./hero";
import { Observable, of } from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  count: number;

  constructor( private messageService: MessageService) {
    this.count = 0;
  }


  getHeroes(): Hero[]
  {
    this.count++;
    return HEROES;
  }

  getHeroesObservable(): Observable<Hero[]>
  {
    this.count++;
    console.log("adding to the message service");
    return of(HEROES);
  }



}

