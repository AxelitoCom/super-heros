import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Hero} from '../shared/model/hero';
import {HerosService} from '../shared/services/heros.service';

@Injectable()
export class HeroContextService {
  private store = new BehaviorSubject<Hero[]>([]);
  private selected = new BehaviorSubject<Hero>(null);
  dataFetched = false;

  constructor(private herosService: HerosService) {
  }

  observeStore(): Observable<Hero[]> {
    return this.store.asObservable();
  }

  updateStore(heros: Hero[]): void {
    this.store.next(heros);
    this.dataFetched = true;
  }

  fetchData(slug ?: string): void {
    this.herosService.getAll().subscribe(heros => {
      this.updateStore(heros);

      if (slug) {
        this.updateSelected(slug);
      }
    });
  }

  observeSelected(slug?: string): Observable<Hero> {
    if (!this.dataFetched) {
      this.fetchData(slug);
    } else if (slug) {
      this.updateSelected(slug);
    }

    return this.selected.asObservable();
  }

  private updateSelected(slug: string): void {
    const hero: Hero = this.store.value.find(h => h.slug === slug);
    this.selected.next(hero);
  }
}
