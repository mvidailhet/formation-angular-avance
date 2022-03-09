import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Pokemon } from '../models/pokemon';

export enum PokemonTypeEnum {
  FIRE = 'FIRE',
  GRASS = 'GRASS',
  WATER = 'WATER',
  POISON = 'POISON',
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  nextPokemonsUrl: string | undefined;

  constructor(private httpClient: HttpClient) {}

  getPokemonData(pokemon: Pokemon) {
    return this.httpClient.get(pokemon.url).pipe(
      catchError((error) => {
        console.error(error);
        return of({});
      })
    );
  }

  private handleHttpError(error: HttpErrorResponse) {
    switch (error.status) {
      case 404:
        alert('Error: The requested url does not exist');
        break;
      default:
        alert('Error: An error occured requesting the api');
    }
    console.error(error);
  }

  getPokemonList(): Observable<Pokemon[] | undefined> {
    return this.httpClient
      .get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .pipe(
        catchError((error) => {
          this.handleHttpError(error);
          return of([]); // On retourne un tableau vide en cas d'erreur
        }),
        tap((response: any) => {
          console.log(response);
          this.nextPokemonsUrl = response.next;
        }), // On "tap" dans les données pour y récupérer ce qui nous intéresse
        map((response) => response.results) // On map les données pour n'evoyer que le nécessaire
      );
  }
}
