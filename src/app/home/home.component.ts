import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons: any;
  Pokemons: any;
  errorMessage: string;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(
      pokemon => this.Pokemons = pokemon,
      error => this.errorMessage =  error as any
    );
  }

  startSearch(searchParam: any, dropdown: any) {
    const result = [];

    if (searchParam.length > 0 && dropdown !== 0) {
      this.Pokemons.map((item) => {
        if (dropdown === 'name') {
          if (item.name === searchParam) {
            result.push(item);
          }
        } else if (dropdown === 'attacks' && item.attacks) {
          item.attacks.map((attack) => {
            if (attack.name === searchParam) {
              result.push(item);
            }
          });
        } else if (dropdown === 'types' && item.types) {
          item.types.map((type) => {
            if (type === searchParam) {
              result.push(item);
            }
          });
        } else if (dropdown === 'weaknesses' && item.weaknesses) {
          item.weaknesses.map((weakness) => {
            if (weakness.type === searchParam) {
              result.push(item);
            }
          });
        } else if (dropdown === 'rarity' && item.rarity) {
            if (item.rarity === searchParam) {
              result.push(item);
            }
        } else if (dropdown === 'evolvesFrom' && item.evolvesFrom) {
            if (item.evolvesFrom === searchParam) {
              result.push(item);
            }
          } else if (dropdown === 'lvl' && item.level) {
            if (item.level >= searchParam) {
              result.push(item);
            }
          } else if (dropdown === 'hp' && item.hp) {
            if (item.hp >= searchParam) {
              result.push(item);
            }
          }
      });
    }
    this.pokemons = result;
   }

}
