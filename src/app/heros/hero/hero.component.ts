import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroContextService} from '../hero-context.service';
import {Subscription} from 'rxjs';
import {Hero} from '../../shared/model/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {

  private subscription = new Subscription;
  hero: Hero;

  constructor(private route: ActivatedRoute,
              private herosContextService: HeroContextService) {
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.params['id'];
    this.subscription = this.herosContextService.observeSelected(slug).subscribe(hero => this.hero = hero);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
