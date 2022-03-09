import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons$ = this.loadPokemonList();

  constructor(private apiService: ApiService, private storageService: StorageService) {}

  private loadPokemonList(): Observable<Pokemon[] | undefined> {
    return this.storageService.pokemons$.pipe(
      switchMap((pokemons: Pokemon[] | undefined) => {
        if (!pokemons) {
          return this.apiService.getPokemonList().pipe(
            tap((pokemons: Pokemon[] | undefined) => {
              if (pokemons) this.storageService.storePokemons(pokemons);
            })
          );
        }
        return this.storageService.pokemons$;
      })
    );
  }
}
