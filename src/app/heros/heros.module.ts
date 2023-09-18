import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HerosComponent} from './heros.component';
import {RouterModule, Routes} from '@angular/router';
import {ChipsModule} from 'primeng/chips';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ScrollTopModule} from 'primeng/scrolltop';
import {HeroComponent} from './hero/hero.component';
import {CustomTagComponent} from '../shared/standalone-components/custom-tag/custom-tag.component';
import {HeroContextService} from './hero-context.service';

const routes: Routes = [
  {
    path: '',
    component: HerosComponent
  },
  {
    path: ':id',
    component: HeroComponent
  }
];

@NgModule({
  declarations: [
    HerosComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChipsModule,
    CardModule,
    ButtonModule,
    NgOptimizedImage,
    ScrollTopModule,
    CustomTagComponent
  ],
  providers: [HeroContextService]
})
export class HerosModule {
}
