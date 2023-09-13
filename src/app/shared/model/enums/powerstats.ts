export enum PowerStatCode {
  INTELLIGENCE = 'intelligence',
  STRENGTH = 'strength',
  SPEED = 'speed',
  DURABILITY = 'durability',
  POWER = 'power',
  COMBAT = 'combat'
}

// Ceci est l'enum pattern
// On crée une classe pour avoir une enum enrichie comme en Java par exemple
export class PowerStat {
  static readonly INTELLIGENCE = new PowerStat(PowerStatCode.INTELLIGENCE, 'Intelligence');
  static readonly STRENGTH = new PowerStat(PowerStatCode.STRENGTH, 'Force');
  static readonly SPEED = new PowerStat(PowerStatCode.SPEED, 'Vitesse');
  static readonly DURABILITY = new PowerStat(PowerStatCode.DURABILITY, 'Endurance');
  static readonly POWER = new PowerStat(PowerStatCode.POWER, 'Puissance');
  static readonly COMBAT = new PowerStat(PowerStatCode.COMBAT, 'Combat');

  constructor(public code: PowerStatCode, public label: string) {
  }

  static all(): PowerStat[] {
    return Object.keys(PowerStat).map(v => PowerStat[v as keyof typeof PowerStatCode]);
  }
}
