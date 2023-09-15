import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';

const routes: Routes = [
  {path: 'acceuil', component: AccueilComponent},
  {path: 'tous-les-heros', component: AccueilComponent},
  {path: '**', redirectTo: '/acceuil'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
