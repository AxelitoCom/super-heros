export enum AlignementCode {
  GOOD = 'good',
  BAD = 'bad'
}

export class Alignement {
  static readonly INTELLIGENCE = new Alignement(AlignementCode.GOOD, 'Soleil', '#c49104', '#f0eada');
  static readonly STRENGTH = new Alignement(AlignementCode.BAD, 'Lune', '#1c3478', '#dfe1e8');

  constructor(public code: AlignementCode, public label: string, public colorHigh: string, public colorLow: string) {
  }

  static from(val: string): Alignement {
    return Object.values(Alignement).find(v => v['code'] === val);
  }
}
