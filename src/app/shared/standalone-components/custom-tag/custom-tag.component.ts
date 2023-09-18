import {Component, Input} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-custom-tag',
  templateUrl: './custom-tag.component.html',
  styleUrls: ['./custom-tag.component.scss']
})
export class CustomTagComponent {
  @Input()
  color = '';
  @Input()
  bgColor = '';
  @Input()
  value = '';
}
