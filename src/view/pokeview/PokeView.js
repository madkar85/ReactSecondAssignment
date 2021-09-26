import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import "./PokeView.css";

export const PokeView = () => {
  const [serverData, setServerData] = useState();
  const { phrase } = useLocation();
  const history = useHistory();

  const fetchData = async () => {
    const { data } = await PokemonAPIService.getAllPokemon();
    setServerData(data);
  };

  useEffect(() => {
    fetchData();
  }, [])

  const location = {
    pathname: "/home",
    state: "ett state",
  };

  const displayData = () => {
    return serverData?.results.map((pokemon, i) => (
      <div key={pokemon.name}>
        <h3>
          {i + 1}.{pokemon.name}
        </h3>
        <button
          onClick={() =>
            history.push({ pathname: RoutingPath.infoView, state: pokemon })
          }
        >
          Mer information
        </button>
      </div>
    ));
  };

  return (
    <div>
      <h1>{phrase}</h1>
      <h1>Here´s a list of our pokemons</h1>
      {displayData()};
    </div>
  );
};
