export function formatPokemonId(id: number) {
    return '#' + id.toString().padStart(4, '0');
}

// Height value comes in decimeters
export function formatPokemonHeight(height: number) {
    return (height * 10).toString() + ' cm'
}

// Weight value comes in hectograms
export function formatPokemonWeight(weight: number) {
    return (weight / 10).toString() + ' kg'
}