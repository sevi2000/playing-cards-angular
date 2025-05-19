import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  @Input() monster: Monster = new Monster();
  monsterTypeIcon: string = "assets/type/electric.png"
  backgroundColor: string = "rgb(255,255,104";
}
