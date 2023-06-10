import {Component, Input} from '@angular/core';
import Game from "../../models/game";

@Component({
  selector: 'app-game-card-container',
  templateUrl: './game-card-container.component.html',
  styleUrls: ['./game-card-container.component.scss']
})

export class GameCardContainerComponent {

  @Input() games?: Game[];
}
