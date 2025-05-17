import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `./app.component.html`,
  styleUrl: `app.component.css`,
  imports: [PlayingCardComponent, SearchBarComponent]
})
export class AppComponent {

  monsters!: Monster[];
  selectedMonsterIndex: number = 0;
  monstersNames : string[] = ["Pik" , "Car", "Bulb", "Sala"];
  attacksNames : string[] = ["Thunder Shock" , "Water Gun", "Vine Whip","Scratch"];
  attackStrengths : number[] = [20 , 20, 30, 10];
  attacksDescriptions : string[] = ["Flip a coin. If heads, the opponent’s Active Pokémon is now Paralyzed." , "Shoots a stream of water at the opponent.", "Whips the opponent with vines.", "A basic physical attack."];


  constructor() {
    this.monsters = [];
    for (let i = 0; i < 4; i++) this.monsters.push(new Monster())
    this.monsters.map((monster: Monster, index: number) => {
      monster.name = this.monstersNames[index];
      monster.hp = 60;
      monster.figureCaption = `N° 00${index + 1} ${this.monstersNames[index]}`;
      monster.attackName = this.attacksNames[index];
      monster.attackStrength = this.attackStrengths[index];
      monster.attackDescription = this.attacksDescriptions[index];
      return monster;
    }
    )
  }

  toggleMonster () : void {
    this.selectedMonsterIndex = (this.selectedMonsterIndex + 1) % this.monsters.length;
  }
}
