import { Pokemon } from '../models/Pokemon';
import {
  PokemonLink,
  PokemonListResponse,
} from '../models/PokemonListResponse';
import { Request, PokedexClient } from './NetworkClient';

export interface PokemonService {
  getPokemonList: () => Promise<PokemonLink[]>;
  getPokemon: (url: string) => Promise<Pokemon>;
}

export class PokemonServiceImpl implements PokemonService {
  getPokemonList = (): Promise<PokemonLink[]> => {
    const request = PokemonRequest({
      url: 'pokemon/',
      params: {
        limit: 20,
        offset: 0,
      },
    });
    return PokedexClient.request<PokemonListResponse>(request)
      .then((response) => {
        return response.results;
      })
      .catch((error) => {
        console.log(`===ERROR: ${error}`);
        throw error;
      });
  };

  getPokemon = (url: string): Promise<Pokemon> => {
    const request = PokemonRequest({ url });

    return PokedexClient.request<Pokemon>(request)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(`===ERROR: ${error}`);
        throw error;
      });
  };
}

interface PokemonListRequestParams {
  url: string;
  params?: Record<string, any>;
}

export const PokemonRequest = ({
  url,
  params,
}: PokemonListRequestParams): Request => {
  return {
    method: 'GET',
    url,
    params,
    body: undefined,
  };
};
