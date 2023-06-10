import { Component } from '@angular/core';
import {Observable} from "rxjs";
import Game from "../../models/game";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-games-route',
  templateUrl: './games-route.component.html',
  styleUrls: ['./games-route.component.scss']
})
export class GamesRouteComponent {

  games$: Observable<Game[]>;

  constructor(private gameService: GameService) {

    this.games$ = this.gameService.getAll();
  }

}
