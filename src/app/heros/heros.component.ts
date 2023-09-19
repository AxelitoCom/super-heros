import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from '../shared/model/hero';
import {Alignement} from '../shared/model/enums/alignement';
import {HeroContextService} from './hero-context.service';
import {MenuItem} from 'primeng/api';
import {PaginatorState} from 'primeng/paginator';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
})
export class HerosComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private heros: Hero[] = [];

  herosPagines: Hero[] = [];
  menu: MenuItem[] = [{label: 'Tous les héros'}];
  accueil: MenuItem = {icon: 'pi pi-home', routerLink: '/'};
  nbLignes: number;
  nbParLigne: number = 30;
  // Enums
  alignmentEnum = Alignement;

  constructor(private herosContextService: HeroContextService) {
  }

  ngOnInit(): void {
    if (!this.herosContextService.dataFetched) {
      this.herosContextService.fetchData()
    }

    this.subscription = this.herosContextService.observeStore().subscribe(heros => {
      this.heros = heros;
      this.nbLignes = heros.length;
      this.paginer({page: 0, rows: this.nbParLigne, first: 0});
    });
  }

  paginer(pageEvent: PaginatorState): void {
    const page = pageEvent.page + 1;
    this.nbParLigne = pageEvent.rows;
    this.herosPagines = this.heros.slice(pageEvent.rows * page - pageEvent.rows, pageEvent.rows * page);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
