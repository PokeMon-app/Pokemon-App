import React, {useState, useEffect} from 'react';
import axios from 'axios';

function GetPokemon() {
    //can refactor this method to take in params based on the position of the scroll to make another get for the next gen of pokemon...
    // may need two seperate methods to persist the previous gen list
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [Gen1Pokemon, setGen1Pokemon] = useState([]);
    // const [items, setItems] = useState([]);

    let Gen2Url = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100";
    let Gen3Url = "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135";
    let Gen4Url = "https://pokeapi.co/api/v2/pokemon?offset=386&limit=108";
    let Gen5Url = "https://pokeapi.co/api/v2/pokemon?offset=495&limit=154";
    let Gen6Url = "https://pokeapi.co/api/v2/pokemon?offset=649&limit=72";
    let Gen7Url = "https://pokeapi.co/api/v2/pokemon?offset=721&limit=88";
    let Gen8Url = "https://pokeapi.co/api/v2/pokemon?offset=809&limit=89";

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    // console.log(data.results)
                    // setItems(data.results);
                    for(let pokemon of data.results) {
                        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                            .then(results => results.json())
                            .then(pokemon => {
                                let newPokemon = {id: pokemon.id, name: pokemon.name, image: pokemon.sprites.front_default};
                                console.log(Gen1Pokemon)
                                setGen1Pokemon([...Gen1Pokemon, newPokemon]);
                                console.log(Gen1Pokemon)
                            })
                    }
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {Gen1Pokemon.map(pokemon => {
                    return  <li key={pokemon.name}>
                                {pokemon.name}
                            </li>
                })}
            </ul>
        )
    }
}

export default GetPokemon;