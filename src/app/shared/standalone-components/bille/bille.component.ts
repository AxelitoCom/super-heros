import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bille',
  templateUrl: './bille.component.html',
  styleUrls: ['./bille.component.scss'],
  standalone: true
})
export class BilleComponent {
  @Input()
  color = '';
}
