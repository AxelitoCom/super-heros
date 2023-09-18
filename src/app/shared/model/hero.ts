import {PowerStatCode} from './enums/powerstats';
import {ImageSize} from './enums/image-size';
import {AlignementCode} from './enums/alignement';

export interface Hero {
  id: number;
  name: string;
  slug: string;
  powerstats: Record<PowerStatCode, number>;
  apparence: Apparence;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Record<ImageSize, string>;
}

export interface Apparence {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}

export interface Biography {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: AlignementCode;
}

export interface Work {
  occupation: string;
  base: string;
}

export interface Connections {
  groupAffiliation: string;
  relatives: string;
}
