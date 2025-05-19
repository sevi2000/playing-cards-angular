import { Component, computed, input, Input, InputSignal, OnChanges, Signal, SimpleChanges } from '@angular/core';
import { MonsterTypeProperties, MonsterType, IMonsterProperties } from '../../utils/monster.utils';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  monster: InputSignal<Monster> = input(new Monster());
  monsterTypeIcon: Signal<any> = computed(() => {
    return MonsterTypeProperties[this.monster().type].imageUrl;
  })
  backgroundColor:  Signal<any> = computed(() => {
    return MonsterTypeProperties[this.monster().type].color;
  })
}
