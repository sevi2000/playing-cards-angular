import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  @Input() name: string = "My monster";
 @Input() hp: number = 40;
 @Input() figureCaption: string = "N°001 Monster";
 @Input() attackName: string = "Geo Impact";
 @Input() attackStrength: number = 60;
 @Input() attackDescription: string = "This is a long description of monster's attack...";
}
