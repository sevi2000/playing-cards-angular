import { IMonsterProperties, MonsterType, MonsterTypeProperties } from './../../utils/monster.utils';
import { Component, input, Input, InputSignal, OnChanges, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent implements OnChanges {

  @Input() monster: Monster = new Monster();
  monsterTypeIcon: string = "assets/type/electric.png"
  backgroundColor: string = "rgb(255,255,104)";

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes["monster"]) {
      return;
    }
    let newType: MonsterType = changes["monster"].currentValue.type;
    let oldType: MonsterType = changes["monster"].previousValue?.type;

    if (newType === oldType) return;
    const monsterProperties : IMonsterProperties = MonsterTypeProperties[this.monster.type];
    this.monsterTypeIcon = monsterProperties.imageUrl;
    console.log(this.monsterTypeIcon);
    this.backgroundColor = monsterProperties.color;
  }
}
