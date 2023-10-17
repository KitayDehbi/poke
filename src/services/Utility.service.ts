import {IMAGE_URL} from "../config/constants";

export function getPokemonIdFromUrl(url: string) {
    return url.substring(0, url.length - 1).split("/").reverse()[0]
}

export function buildImageUrl(id: string) {
    return IMAGE_URL + id + ".svg"
}