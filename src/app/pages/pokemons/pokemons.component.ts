import { Component } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent {
  pokemons: Pokemon[] | undefined;
  pokemons$: Observable<Pokemon[] | undefined>;
  errorObject = null;

  constructor(private pokemonService: PokemonService) {
    this.pokemons$ = this.pokemonService.pokemons$.pipe(
      catchError((error) => {
        this.errorObject = error;
        return throwError(() => new Error(error));
      })
    );

    this.pokemons$.subscribe((pokemons: Pokemon[] | undefined) => {
      this.pokemons = pokemons;
    });
  }
}
