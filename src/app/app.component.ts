import { Component, computed, CreateSignalOptions, inject, signal, WritableSignal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MonsterType } from './utils/monster.utils';
import { ToggleMonsterPageComponent } from './pages/toggle-monster-page/toggle-monster-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `./app.component.html`,
  styleUrl: `app.component.css`,
  imports: [RouterOutlet]
})
export class AppComponent {

  private router = inject(Router)
  lastLink: Element | null = null;
  selectPage($event: MouseEvent) {
    if(this.lastLink != null) {
      this.lastLink.id = "";
    }
    let target = $event.target || $event.srcElement || $event.currentTarget;
    this.lastLink = (target as Element);
    this.lastLink.id = "selected";
    console.log(this.lastLink.getHTML())
    console.log(this.lastLink)
    const name = this.lastLink.getHTML() as string
    this.router.navigate([this.chooseRoute(name)])
  }

private chooseRoute(link: string):string {
  switch(link) {
    case "Acceuil":
      return "/home";
    case "Recherche":
      return "/search"
    default:
      return "/home"
  }
}

  
}
