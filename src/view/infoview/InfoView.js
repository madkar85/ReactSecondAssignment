import { useLocation } from "react-router";
import { useState, useEffect } from "react";

export const InfoView = () => {
  const [serverData, setServerData] = useState();
  const location = useLocation();

  const fetchData = async () => {
    await fetch(location.state.url)
      .then((response) => response.json())
      .then((data) => { console.log(data); setServerData(data) })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayData = () => {
    return serverData ? (
      <div>
        <img src={serverData?.sprites?.other?.dream_world?.front_default}
        alt="A pokemon"/>
        <h1>Name: {serverData.name}</h1>
        {serverData.abilities?.map(ability => <h2>Ability: {ability.ability.name}</h2>)}
      </div>
    ) : (
      <div>
        <p>Loading</p>
      </div>
    );
  };

  return <div>{displayData()}</div>;
};
