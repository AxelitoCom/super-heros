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
  static readonly INTELLIGENCE = new PowerStat(PowerStatCode.INTELLIGENCE, 'Intelligence', '#4287f5');
  static readonly STRENGTH = new PowerStat(PowerStatCode.STRENGTH, 'Force', '#f5424e');
  static readonly SPEED = new PowerStat(PowerStatCode.SPEED, 'Vitesse', '#42daf5');
  static readonly DURABILITY = new PowerStat(PowerStatCode.DURABILITY, 'Endurance', '#42f542');
  static readonly POWER = new PowerStat(PowerStatCode.POWER, 'Puissance', '#eff542');
  static readonly COMBAT = new PowerStat(PowerStatCode.COMBAT, 'Combat', '#d142f5');

  constructor(public code: PowerStatCode, public label: string, public color: string) {
  }

  static all(): PowerStat[] {
    return Object.keys(PowerStat).map(v => PowerStat[v as keyof typeof PowerStatCode]);
  }
}
