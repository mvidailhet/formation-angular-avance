import { Injectable } from '@angular/core';
import { mergeMap, Observable, of, shareReplay, switchMap, tap } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  cachedPokemons$: Observable<Pokemon[]> | undefined;

  constructor(
    private apiService: ApiService,
  ) {}

  getPokemonList(): Observable<Pokemon[]> {
    if (!this.cachedPokemons$) {
      this.cachedPokemons$ = this.apiService.getPokemonList().pipe(
        shareReplay(1) // on rejoue le dernier résultat
      );
    }
    return this.cachedPokemons$;
  }
}
