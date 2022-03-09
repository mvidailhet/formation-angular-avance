import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  static STORAGE_KEY_POKEMONS = 'pokemons';
  _storagePokemons$: BehaviorSubject<Pokemon[] | undefined> =
    new BehaviorSubject(this.getPokemonsFromStorage());

  pokemons$ = this.getPokemonList();

  constructor(private apiService: ApiService) {}

  private getPokemonsFromStorage(): Pokemon[] | undefined {
    const storedPokemonsString = localStorage.getItem(
      PokemonService.STORAGE_KEY_POKEMONS
    );
    const pokemons = storedPokemonsString
      ? JSON.parse(storedPokemonsString)
      : undefined;
    return pokemons;
  }

  private storePokemons(pokemons: Pokemon[]) {
    console.log('storing pokemons');
    localStorage.setItem(
      PokemonService.STORAGE_KEY_POKEMONS,
      JSON.stringify(pokemons)
    );
    this._storagePokemons$.next(pokemons);
  }

  private getPokemonList(): Observable<Pokemon[] | undefined> {
    return this._storagePokemons$.pipe(
      switchMap((pokemons: Pokemon[] | undefined) => {
        if (!pokemons) {
          return this.apiService.getPokemonList().pipe(
            tap((pokemons: Pokemon[] | undefined) => {
              if (pokemons) this.storePokemons(pokemons);
            })
          );
        }
        return this._storagePokemons$;
      })
    );
  }
}
