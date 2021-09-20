import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router';


export const PokeView = () => {
    const [serverResponse, setServerResponse] = useState();
    const [count, setCount] = useState(1);
    const { phrase } = useLocation();
    

    const fetchData = async () => {
        const API_URL = `https://pokeapi.co/api/v2/pokemon/${count}`;
        try {
            const response = await Axios.get(API_URL);
            setServerResponse(response);
            setCount(count + 1);
        } catch(error) {
            alert("Error when retrieving data: " + error);

        }
    };

    return (
        <div>
            <h1>{phrase}</h1>
            <h1>You are in Poke View</h1>
            <h2>{serverResponse?.data?.name}</h2>
            <button onClick={() => fetchData()}>Get a pokemon</button>
        </div>
    );
}
