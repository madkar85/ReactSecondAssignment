import http from "../PokemonApi";

const getAllPokemon = () => {
    return http.get("pokemon?limit=50");
}

export default {getAllPokemon}; 