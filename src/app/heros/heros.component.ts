import {Component, OnInit} from '@angular/core';
import {Hero} from '../shared/model/hero';
import {Alignement} from '../shared/model/enums/alignement';
import {HeroContextService} from './hero-context.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
})
export class HerosComponent implements OnInit {

  private heros: Hero[] = [];
  herosPagines: Hero[] = [];
  alignmentEnum = Alignement;

  constructor(private herosContextService: HeroContextService) {
  }

  ngOnInit(): void {
    if (!this.herosContextService.dataFetched) {
      this.herosContextService.fetchData()
    }

    this.herosContextService.observeStore().subscribe(heros => {
      this.heros = heros;
      this.herosPagines = this.heros.slice(0, 10);
    });
  }
}
