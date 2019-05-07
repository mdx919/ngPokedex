import { Component } from '@angular/core';
import { Pokemons } from '../pokedex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';

  pokemons;

  startSearch(searchParam:any, dropdown: any) {
    
    // console.log(searchParam);
    // console.log(dropdown);
    let result = [];

    if (searchParam.length > 0 && dropdown !== 0) {
      Pokemons.map((item) => { 
        if (dropdown === 'name') {
          if(item.name === searchParam) {
            result.push(item);
          }
        } else if (dropdown === 'attacks' && item.attacks) {
          item.attacks.map((attack) => {
            if(attack.name === searchParam) {
              result.push(item);
            }
          })
        } else if (dropdown === 'types' && item.types) {
          item.types.map((type) => {
            if(type === searchParam) {
              result.push(item);
            }
          })
        } else if (dropdown === 'weaknesses' && item.weaknesses) {
          item.weaknesses.map((weakness) => {
            if(weakness.type === searchParam) {
              result.push(item);
            }
          })
        } else if (dropdown === 'rarity' && item.rarity) {
            if(item.rarity === searchParam) {
              result.push(item);
            }
        } else if (dropdown === 'evolvesFrom' && item.evolvesFrom) {
            if(item.evolvesFrom === searchParam) {
              result.push(item);
            }
          } else if (dropdown === 'lvl' && item.level) {
            if(item.level >= searchParam) {
              result.push(item);
            }
          } else if (dropdown === 'hp' && item.hp) {
            if(item.hp >= searchParam) {
              result.push(item);
            }
          }
      })
    }
    this.pokemons = result;
    console.log(this.pokemons);
    
  }
}
