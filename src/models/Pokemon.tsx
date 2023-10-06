export type PokemonType = {
  name: string;
  imageURL: string; // TODO: Seems like the type icon does not come from the API, change this to a resource
};

export type Pokemon = {
  name: string;
  id: number;
  types: PokemonType[];
  imageURL: string;
};

export const Pokemons: Pokemon[] = [
  {
    name: 'Bulbasaur',
    id: 1,
    types: [{ name: 'Test', imageURL: '' }],
    imageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    name: 'Ivysaur',
    id: 2,
    types: [
      { name: 'Test', imageURL: '' },
      { name: 'Test 2', imageURL: '' },
    ],
    imageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    name: 'Venusaur',
    id: 3,
    types: [{ name: 'Test', imageURL: '' }],
    imageURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
];
