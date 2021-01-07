import React, {useState, useEffect} from 'react';
import axios from 'axios';

function GetPokemon() {
    //can refactor this method to take in params based on the position of the scroll to make another get for the next gen of pokemon...
    // may need two seperate methods to persist the previous gen list
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [AllPokemon, setAllPokemon] = useState([]);




    const getListByGen = async url => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data=> {
                    resolve(data)
                })
        });
    }

    const showPokemon = () => {
        const getData = async () => {
            const pokeUrls = [
                "https://pokeapi.co/api/v2/pokemon?limit=151",
                "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100",
                "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135",
                "https://pokeapi.co/api/v2/pokemon?offset=386&limit=108",
                "https://pokeapi.co/api/v2/pokemon?offset=495&limit=154",
                "https://pokeapi.co/api/v2/pokemon?offset=649&limit=72",
                "https://pokeapi.co/api/v2/pokemon?offset=721&limit=88",
                "https://pokeapi.co/api/v2/pokemon?offset=809&limit=89",
            ];
            for(let url of pokeUrls) {
                let response = await getListByGen(url)
                await renderPokemon(response.results);
                // setLoading(false);
            }
        }
        getData();
    }

    useEffect(showPokemon, []);

    let byPokeUrl = "https://pokeapi.co/api/v2/pokemon/";

    const getEachPokemon = url => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
        });
    }

    const renderPokemon = async data => {
        let pokeList = await Promise.all(data.map(async pokemon => {
            let getPokemon = await getEachPokemon(byPokeUrl + pokemon.name)
            return getPokemon;
        }))
        setAllPokemon(pokeList);
    }


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {AllPokemon.map((pokemon,index) => {
                    return  <button key={index}>
                                <img src={pokemon.sprites.front_default} alt="pokeImg"/>
                            </button>
                })}
            </div>
        )
    }
}

export default GetPokemon;