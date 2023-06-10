import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeRouteComponent} from "./routes/home-route/home-route.component";
import {GamesRouteComponent} from "./routes/games-route/games-route.component";
import {GameRouteComponent} from "./routes/game-route/game-route.component";

const routes: Routes = [
  {path: 'home', component: HomeRouteComponent},
  {path: 'games', component: GamesRouteComponent},
  {path: 'games/:name', component: GameRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
