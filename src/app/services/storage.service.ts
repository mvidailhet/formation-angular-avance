import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  static STORAGE_KEY_POKEMONS = 'pokemons';

  pokemons$: BehaviorSubject<Pokemon[] | undefined> =
    new BehaviorSubject(this.getPokemonsFromStorage());

  private getPokemonsFromStorage(): Pokemon[] | undefined {
    const storedPokemonsString = localStorage.getItem(
      StorageService.STORAGE_KEY_POKEMONS
    );
    const pokemons = storedPokemonsString
      ? JSON.parse(storedPokemonsString)
      : undefined;
    return pokemons;
  }

  storePokemons(pokemons: Pokemon[]) {
    console.log('storing pokemons');
    localStorage.setItem(
      StorageService.STORAGE_KEY_POKEMONS,
      JSON.stringify(pokemons)
    );
    this.pokemons$.next(pokemons);
  }
}
