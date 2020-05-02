import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';
import {LogserviceService} from '../logservice.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  messages: string[];

  heroEventHandler(event: any) {
    console.log("************ heroEventHandler Caught An Event");
    console.log(event);
  }

  // hero:String = 'Windstorm';
  hero: Hero;
/*  {
    id: 1,
    name: 'Windstorm'
  };*/

  constructor(private heroService: HeroService,
              private messageService: MessageService,
              private logserviceService: LogserviceService) {
  }

  async ngOnInit(): void {
    console.log('Hello Antwone from hero ngInit()');
    // this.heroes = this.heroService.getHeroes();
    /*this.heroService.getHeroesObservable().subscribe(
      (heroesReturnObj) => this.heroes = heroesReturnObj
    );*/
    this.heroes = await this.heroService.getHeroesObservable().toPromise();
    // this.messages =  await this.heroService.get.toPromise();
    // this.heroService.getHeroesObservable().sub
  }



  onSelect( selectedHero: Hero) {
    this.hero = selectedHero;
    const msg: string = 'Clicked: ' + selectedHero.name;
    this.messageService.add( msg );
    this.logserviceService.logThis( msg );
  }

}
