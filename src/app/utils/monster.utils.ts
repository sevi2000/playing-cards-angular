export enum MonsterType {
    COLOR_LESS = "color_less",
    DARK = "dark",
    DRAGON = "dragon",
    ELECTRIC = "electric",
    FAIRY = "fairy",
    FIGHT = "fight",
    FIRE = "fire",
    METAL = "metal",
    PLANT = "plant",
    PSYCH = "psych",
    WATER = "water"
}

export interface IMonsterProperties {
    imageUrl: string;
    color: string; 
}

export const MonsterTypeProperties: {[key: string]:IMonsterProperties} = {
  [MonsterType.COLOR_LESS] : {
    imageUrl:`assets/type/color_less.png`,
    color : `rgb(194,185,181)`
  },
  [MonsterType.DARK] : {
    imageUrl:`assets/type/dark.png`,
    color : `rgb(18,53,61)`
  },
  [MonsterType.DRAGON] : {
    imageUrl:`assets/type/dragon.png`,
    color : `rgb(188,153,63)`
  },
  [MonsterType.ELECTRIC] : {
    imageUrl:`assets/type/electric.png`,
    color : `rgb(247,218,5)`
  },
  [MonsterType.FAIRY] : {
    imageUrl:`assets/type/fairy.png`,
    color : `rgb(217,112,145)`
  },
  [MonsterType.FIGHT] : {
    imageUrl:`assets/type/fight.png`,
    color : `rgb(170,55,29)`
  },
  [MonsterType.FIRE] : {
    imageUrl:`assets/type/fire.png`,
    color : `rgb(196,47,46)`
  },
  [MonsterType.METAL] :{

    imageUrl:`assets/type/metal.png`,
    color : `rgb(158,149,134)`
  },
  [MonsterType.PLANT] :{
    imageUrl:`assets/type/plant.png`,
    color : `rgb(81,163,72)`
  },
  [MonsterType.PSYCH] :{
    imageUrl:`assets/type/psych.png`,
    color : `rgb(119,69,142)`
  },
  [MonsterType.WATER] :{
    imageUrl:`assets/type/water.png`,
    color : `rgb(53,130,198)`
  }
}