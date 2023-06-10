import { Injectable } from '@angular/core';
import data from '../data/games.json'
import {Observable, Subject, map, of, scan, from} from "rxjs";
import Game from "../models/game";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getAll(): Observable<Game[]>{
    return of(data)
      .pipe(
        map((value) => Game.fromJsonArray(value))
      )
  }

  getGame(name: string) : Observable<Game>{

    const g = data.find((value) => value.name == name);

    if (g){
      return of(new Game(g))
    }

    throw new Error('Can\'t find game with this name');

  }
}
