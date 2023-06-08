import MeetingNote from "./meeting-note";

type gameJSON = {
  name: string ,
  averageTime: number,
  shortDescription: string,
  fullDescription: string,
  rules: string,
  img: string
}

export default class Game {

  private static id = 0;

  public id: number;

  public name: string;

  public averageTime: number;

  public shortDescription: string;

  public fullDescription: string;

  public rules: string;

  public img: string;

  notes: MeetingNote[] = [];

  constructor(g: gameJSON) {

    this.id = Game.id;
    Game.id++;

    this.name = g.name;
    this.averageTime = g.averageTime;
    this.shortDescription = g.shortDescription;
    this.fullDescription = g.fullDescription;
    this.rules = g.rules;
    this.img = g.img;
  }

  public static fromJsonArray(arr: gameJSON[]): Game[] {

    const games: Game[] = [];

    arr.forEach((g) => {
      games.push(new Game(g));
    })

    return games;
  }
}

