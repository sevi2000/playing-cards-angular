import { MonsterType } from "../utils/monster.utils";

export class Monster {

   name: string = "My monster";
   image: string = "assets/artworks/pik.png"
   type: MonsterType = MonsterType.ELECTRIC;
   hp: number = 40;
   
   figureCaption: string = "N°001 Monster";
   attackName: string = "Geo Impact";
   attackStrength: number = 60;
   attackDescription: string = "This is a long description of monster's attack...";
}