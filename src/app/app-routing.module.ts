import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'acceuil', loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule)},
  {path: 'heros', loadChildren: () => import('./heros/heros.module').then(m => m.HerosModule)},
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
