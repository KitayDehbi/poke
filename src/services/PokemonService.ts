import axios from "axios";
import {API_URL} from "../config/constants";
import {Pokemon} from "../types/Pokemon";
import {PokemonPaginatedResponse} from "../types/PokemonPaginatedResponse";
import {PokemonDetailResponse} from "../types/PokemonDetailResponse";

export async function getPokemonList(): Promise<PokemonPaginatedResponse<Pokemon>> {
    const pokemonListResponse = await axios.get<PokemonPaginatedResponse<Pokemon>>(API_URL + "pokemon?offset=0&limit=70");
    if (pokemonListResponse.status === 200) {
        return pokemonListResponse.data as PokemonPaginatedResponse<Pokemon>
    }
    throw Error("error has occurred")
}

export async function getPokemonDetails(name:string): Promise<PokemonDetailResponse> {

    const pokemonDetailResponse = await axios.get<PokemonDetailResponse>(API_URL + "pokemon/"+name);

    if (pokemonDetailResponse.status === 200) {
        return pokemonDetailResponse.data as PokemonDetailResponse
    }
    throw Error("error has occurred")
}