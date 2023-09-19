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
import {AliasesPipe} from '../shared/pipes/aliases.pipe';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {PaginatorModule} from 'primeng/paginator';
import {FieldsetModule} from 'primeng/fieldset';
import {BilleComponent} from '../shared/standalone-components/bille/bille.component';
import {KnobModule} from 'primeng/knob';
import {DialogModule} from 'primeng/dialog';

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
    CustomTagComponent,
    AliasesPipe,
    BreadcrumbModule,
    PaginatorModule,
    FieldsetModule,
    BilleComponent,
    KnobModule,
    DialogModule
  ],
  providers: [HeroContextService]
})
export class HerosModule {
}
