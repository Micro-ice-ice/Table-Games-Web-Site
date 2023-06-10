import { Component } from '@angular/core';
import {Observable} from "rxjs";
import Game from "../../models/game";
import {GameService} from "../../services/game.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-route',
  templateUrl: './game-route.component.html',
  styleUrls: ['./game-route.component.scss']
})
export class GameRouteComponent {

  game$: Observable<Game>;

  name: string;

  constructor(private route: ActivatedRoute, private gameService: GameService) {

    this.name = this.route.snapshot.params['name'];

    this.game$ = this.gameService.getGame(this.name);
  }

}
