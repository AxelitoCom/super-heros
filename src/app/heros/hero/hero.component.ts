import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroContextService} from '../hero-context.service';
import {filter, Subscription} from 'rxjs';
import {Hero} from '../../shared/model/hero';
import {MenuItem} from 'primeng/api';
import {Alignement} from '../../shared/model/enums/alignement';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {

  private subscription = new Subscription;
  hero: Hero;
  menu: MenuItem[] = [{label: 'Héros', routerLink: '/heros'}];
  accueil: MenuItem = {icon: 'pi pi-home', routerLink: '/'};
  alignmentEnum = Alignement;

  constructor(private route: ActivatedRoute,
              private herosContextService: HeroContextService) {
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.params['id'];
    this.subscription = this.herosContextService.observeSelected(slug)
      .pipe(filter(hero => !!hero))
      .subscribe(hero => {
      this.hero = hero;
      this.menu.push({label: this.hero.name});
      console.log(hero);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  protected readonly Alignement = Alignement;
}
