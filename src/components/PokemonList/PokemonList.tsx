import {Pokemon} from "../../types/Pokemon";
import {PokemonCard} from "../PokemonCard/PokemonCard";
import style from "./PokemonList.module.css"
import {useEffect, useState} from "react";
import {getPokemonList} from "../../services/PokemonService";
import {IMAGE_URL} from "../../config/constants";
import {Progress} from "@chakra-ui/react";
import {buildImageUrl, getPokemonIdFromUrl} from "../../services/Utility.service";




export const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
    useEffect(() => {
            console.log("hello")
            getPokemonList().then(result => {
                    setPokemonList(result.results)
                }
            )
        }, []
    )


    return <div className={style.container}>
        <Progress value={20} size='xs' colorScheme='pink' />
        {pokemonList.map(item => {
            return <PokemonCard key={item.name} name={item.name.toUpperCase()}
                                imageUrl={buildImageUrl(getPokemonIdFromUrl(item.url))}/>
        })}

    </div>
}