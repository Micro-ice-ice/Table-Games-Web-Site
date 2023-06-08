import { Component } from '@angular/core';
import Game from "./models/game";
import {GameService} from "./services/game.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-table-games';

  games$: Observable<Game[]>;

  constructor(private gameService: GameService) {

    this.games$ = this.gameService.getAll();
  }
}
