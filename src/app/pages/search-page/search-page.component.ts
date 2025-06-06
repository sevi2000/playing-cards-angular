import { Component, WritableSignal, computed, model, signal } from '@angular/core';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { CommonModule } from '@angular/common';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../utils/monster.utils';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';

@Component({
  selector: 'app-search-page',
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

  monsters!: Monster[];
  search = model("")

  filteredMonsters = computed(() => {
    return this.monsters.filter((monster :Monster) => monster.name.toLowerCase().includes(this.search()));
  })
  selectedMonsterIndex: WritableSignal<number> = signal(0);
  selectedMonster = computed(()=> {
    return this.monsters[this.selectedMonsterIndex()];
  })
  monsterTypes: MonsterType [] = [MonsterType.ELECTRIC,MonsterType.WATER,MonsterType.PLANT,MonsterType.FIRE]
  monstersNames : string[] = ["Pik" , "Car", "Bulb", "Sala"];
  attacksNames : string[] = ["Thunder Shock" , "Water Gun", "Vine Whip","Scratch"];
  attackStrengths : number[] = [20 , 20, 30, 10];
  attacksDescriptions : string[] = ["Flip a coin. If heads, the opponent’s Active Pokémon is now Paralyzed." , "Shoots a stream of water at the opponent.", "Whips the opponent with vines.", "A basic physical attack."];


  constructor() {
    this.monsters = [];
    for (let i = 0; i < 4; i++) this.monsters.push(new Monster())
    this.monsters.map((monster: Monster, index: number) => {
      monster.name = this.monstersNames[index];
      monster.image = `assets/artworks/${this.monstersNames[index].toLowerCase()}.jpg`;
      monster.type = this.monsterTypes[index];
      monster.hp = 60;
      monster.figureCaption = `N° 00${index + 1} ${this.monstersNames[index]}`;
      monster.attackName = this.attacksNames[index];
      monster.attackStrength = this.attackStrengths[index];
      monster.attackDescription = this.attacksDescriptions[index];
      return monster;
    }
    )
  }
}
