export class Uris {
  private static BASE: string = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';
  static ALL = Uris.BASE + '/all.json';
  static ID = Uris.BASE + '/id/{id}.json';
  static POWERSTATS = Uris.BASE + '/powerstats/{id}.json';
  static APPEARANCE = Uris.BASE + '/appearance/{id}.json';
  static BIOGRAPHY = Uris.BASE + '/biography/{id}.json';
  static CONNECTIONS = Uris.BASE + '/connections/{id}.json';
  static WORK = Uris.BASE + '/work/{id}.json';
}
