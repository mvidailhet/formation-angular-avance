import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  pokemons: Pokemon[] | undefined;
  pokemons$: Observable<Pokemon[]> = this.apiService.getPokemonList();

  constructor(private apiService: ApiService) {
    this.pokemons$.subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
    });
  }
}
