import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemons } from '../../pokedex';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pageTitle: string = "Pokemon Id ";
  pokemon: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `# ${id}`;

    let pokemons = Pokemons.filter(pokemon => Number(pokemon.number) === id);
    this.pokemon = pokemons[0];
    console.log(this.pokemon);
  }

  onBack(): void {
    this.router.navigate(['/pokemons']);
  }

}
