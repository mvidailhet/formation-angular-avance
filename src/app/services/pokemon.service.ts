import { Injectable } from '@angular/core';
import { Observable, of, shareReplay, Subject, switchMap, tap } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  static STORAGE_KEY_POKEMONS = 'pokemons';

  storagePokemons$: Observable<Pokemon[] | undefined> = of(
    this.getPokemonsFromStorage()
  );

  constructor(
    private apiService: ApiService,
  ) {
  }

  private getPokemonsFromStorage(): Pokemon[] | undefined {
    const storedPokemonsString = localStorage.getItem(
      PokemonService.STORAGE_KEY_POKEMONS
    );
    const pokemons = storedPokemonsString
      ? JSON.parse(storedPokemonsString)
      : undefined;
    return pokemons;
  }

  storePokemons(pokemons: Pokemon[]) {
    console.log('storing pokemons');
    localStorage.setItem(
      PokemonService.STORAGE_KEY_POKEMONS,
      JSON.stringify(pokemons)
    );
    this.storagePokemons$ = of(pokemons);
  }

  getPokemonList(): Observable<Pokemon[] | undefined> {
    return this.storagePokemons$.pipe(
      tap((pokemons: Pokemon[] | undefined) => console.log(pokemons)),
      switchMap((pokemons: Pokemon[] | undefined) => {
        if (!pokemons) {
          return this.apiService.getPokemonList().pipe(
            tap((pokemons: Pokemon[] | undefined) => {
              if (pokemons) this.storePokemons(pokemons);
            }),
          );
        }
        return this.storagePokemons$;
      })
    );
  }
}
