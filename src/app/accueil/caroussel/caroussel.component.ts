import {Component, OnInit} from '@angular/core';
import {HerosService} from '../../shared/services/heros.service';
import {Hero} from '../../shared/model/hero';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],
  //providers: [HerosService]
})
export class CarousselComponent implements OnInit {
  private readonly MAX_HERO_ID: number = 731;
  private readonly MAX_NEWS: number = 5;
  private readonly MIN_NEWS: number = 3;

  private nbOfNews: number = 0;
  heros: Hero[] = [];

  constructor(private herosService: HerosService) {
  }


  ngOnInit(): void {
    this.nbOfNews = this.randomNumber(this.MAX_NEWS, this.MIN_NEWS);
    this.getRandomHeros();
  }

  /**
   * Récupèr aléatoirement 4 super héros (pour simuler les derniers ajouts)
   * @private
   */
  private getRandomHeros(): void {
    const randomId = this.getRandomHeroUniqueId(this.MAX_HERO_ID);
    this.herosService.getById(randomId).subscribe({
      // On ajoute le super héro à la collection et on rappell la méthode s'il en manque
      next: hero => {
        this.heros.push(hero);
        if (this.heros.length < this.nbOfNews) {
          this.getRandomHeros();
        }
      },
      // On n'a pas réussi à récupérer le super héro
      error: (err: HttpErrorResponse) => {
        if (err.status === 404) {
          // Héro non trouvé => on va en chercher un autre ;)
          this.getRandomHeros();
        } else {
          console.error(err);
        }
      }
    });
  }

  /**
   * Retourne un id de super
   * @param max
   * @private
   */
  private getRandomHeroUniqueId(max: number): number {
    let randomId = this.randomNumber(max);

    // Si c'est un doublon, invrémente de 1
    if (this.heros.some(hero => hero.id === randomId)) {
      randomId++;
    }

    return randomId;
  }

  /**
   *  Récupère un numéro entre 1 et l'id le plus grand
   * @param max max limit
   * @param min min limit
   * @private
   */
  private randomNumber(max: number, min: number = 1): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
