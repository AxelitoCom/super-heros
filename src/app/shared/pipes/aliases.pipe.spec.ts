import {AliasesPipe} from './aliases.pipe';

describe('AliasesPipe', () => {
  it('create an instance', () => {
    const pipe = new AliasesPipe();
    expect(pipe).toBeTruthy();
  });

  it('retourne vide pour un élément null', () => {
    const pipe = new AliasesPipe();
    expect(pipe.transform(null)).toBe('');
  });

  it('retourne vide pour un tableau vide', () => {
    const pipe = new AliasesPipe();
    expect(pipe.transform([])).toBe('');
  });

  it('retourne les alias séparés par des virgules', () => {
    const pipe = new AliasesPipe();
    expect(pipe.transform(['tata', 'toto'])).toBe('tata / toto');
  });
});
