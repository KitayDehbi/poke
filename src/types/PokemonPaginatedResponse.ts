export interface PokemonPaginatedResponse<T> {
    count: number
    next?: string
    previous?: string
    results: T[]
}