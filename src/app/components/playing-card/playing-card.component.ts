import { Component, Input } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  @Input(
    {
      required : true,
      alias : "my-monster"

    }
  ) monster: Monster = new Monster()
}
