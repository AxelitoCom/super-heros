import {Component, OnInit} from '@angular/core';
import {HerosService} from '../../shared/services/heros.service';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],
  //providers: [HerosService]
})
export class CarousselComponent implements OnInit {


  constructor(private herosService: HerosService) {
  }

  ngOnInit(): void {
    this.herosService.getById(600).subscribe(hero => {
      console.log(hero);
    });
  }
}
