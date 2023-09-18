import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccueilComponent} from './accueil.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {RouterLink, RouterModule, Routes} from '@angular/router';
import {DernieresRecruesComponent} from './dernieres-recrues/dernieres-recrues.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  }
];


@NgModule({
  declarations: [
    AccueilComponent,
    DernieresRecruesComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterLink,
    RouterModule.forChild(routes)
  ]
})

export class AccueilModule {
}
