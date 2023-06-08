import MeetingNote from "./meeting-note";

type gameJSON = {
  name: string ,
  alternativeName: string,
  averageTime: number,
  playerCount: {min: number, max: number};
  shortDescription: string,
  fullDescription: string,
  rules: string,
  img: string,
  hot: boolean
}

export default class Game implements gameJSON{

  private static id = 0;

  public id: number;

  public name: string;

  public alternativeName: string;

  public playerCount: {min: number, max: number};

  public averageTime: number;

  public shortDescription: string;

  public fullDescription: string;

  public rules: string;

  public img: string;

  public hot: boolean;

  notes: MeetingNote[] = [];

  constructor(g: gameJSON) {

    this.id = Game.id;
    Game.id++;

    this.name = g.name;
    this.alternativeName = g.alternativeName;
    this.averageTime = g.averageTime;
    this.playerCount = g.playerCount;
    this.shortDescription = g.shortDescription;
    this.fullDescription = g.fullDescription;
    this.rules = g.rules;
    this.img = g.img;
    this.hot = g.hot;
  }

  public static fromJsonArray(arr: gameJSON[]): Game[] {

    const games: Game[] = [];

    arr.forEach((g) => {
      games.push(new Game(g));
    })

    return games;
  }


}

