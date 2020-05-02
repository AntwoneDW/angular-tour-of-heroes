import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {NotheroesComponent} from "./notheroes/notheroes.component";

const routes: Routes = [
  { path: '', component: HeroesComponent},
  { path: 'notheroes', component: NotheroesComponent}
];

const componentsForRoutes = [HeroesComponent, NotheroesComponent];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routeComponentForImport = componentsForRoutes;
