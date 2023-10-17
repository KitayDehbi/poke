import {Stat} from "./Stat";
import {BaseAbility} from "./BaseAbility";
import {Ability} from "./Ability";

export interface PokemonDetailResponse {
    abilities: Ability[],
    stats : Stat[]

}

