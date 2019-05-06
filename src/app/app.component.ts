import { Component } from '@angular/core';
import { Pokemons } from '../pokedex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';

  pokemons = Pokemons;
}
