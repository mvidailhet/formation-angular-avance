export interface Pokemon {
  name: string;
  url: string;
  details?: PokemonDetails;
}

export interface PokemonDetails {
  id: number;
  types: PokemonType[];
  sprites: PokemonSprites;
}

export interface PokemonType {
  slot: number;
  type: PokemonTypeDetails;
}

export interface PokemonTypeDetails {
  name: string;
  url: string;
}

export interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  front_default: string | null;
  front_female: string | null;
}
