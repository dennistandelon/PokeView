interface Pokemon{
    name: string,
    url:string
}

interface PokemonHeader{
    count: number,
    next?:string,
    previous?:string,
    results: Pokemon[]
}

export type {PokemonHeader, Pokemon}