import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  pokemons: Pokemon[] | undefined;
  pokemons$: Observable<Pokemon[] | undefined> = this.pokemonService.getPokemonList();

  constructor(private pokemonService: PokemonService) {
    this.pokemons$.subscribe((pokemons: Pokemon[] | undefined) => {
      console.log('got pokemons');
      console.log(pokemons);
      this.pokemons = pokemons;
    });
  }
}
