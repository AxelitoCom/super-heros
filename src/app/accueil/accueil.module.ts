import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccueilComponent} from './accueil.component';
import {CarousselComponent} from './caroussel/caroussel.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {RouterLink} from '@angular/router';


@NgModule({
  declarations: [
    AccueilComponent,
    CarousselComponent
  ],
    imports: [
        CommonModule,
        CarouselModule,
        RouterLink
    ]
})

export class AccueilModule {
}
