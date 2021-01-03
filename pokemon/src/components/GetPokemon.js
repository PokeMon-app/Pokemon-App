import React, {useState} from 'react';
import axios from 'axios';

const GetPokemon = () => {
    //can refactor this method to take in params based on the position of the scroll to make another get for the next gen of pokemon...
    // may need two seperate methods to persist the previous gen list
    const [setPokemon, setGen1] = useState([]);


    const GetGen1 = async () => {
        const response = await
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        return response.data.results;
    };
    GetGen1().then(pokeList => {
        let names = [];
        for (let pokemon of pokeList) {
            names.push(pokemon.name)
        }
        constructButtons(names).then(res => {
            console.log(res)
        });
    });

    const GetGen2 = async () => {
        const response = await
            axios.get("https://pokeapi.co/api/v2/pokemon?offset=151&limit=100")
        return response.data.results;
    };
    GetGen2().then(pokeList => {
        let names = [];
        for (let pokemon of pokeList) {
            names.push(pokemon.name)
        }
        return names;
    });

    const GetGen3 = async () => {
        const response = await
            axios.get("https://pokeapi.co/api/v2/pokemon?offset=251&limit=135")
        return response.data.results;
    };
    GetGen3().then(pokeList => {
        let names = [];
        for (let pokemon of pokeList) {
            names.push(pokemon.name)
        }
        return names;
    });

    const GetGen4 = async () => {
        const response = await
            axios.get("https://pokeapi.co/api/v2/pokemon?offset=386&limit=108")
        return response.data.results;
    };
    GetGen4().then(pokeList => {
        let names = [];
        for (let pokemon of pokeList) {
            names.push(pokemon.name)
        }
        return names;
    });

    const GetGen5 = async () => {
        const response = await
            axios.get("https://pokeapi.co/api/v2/pokemon?offset=495&limit=154")
        return response.data.results;
    };
    GetGen5().then(pokeList => {
        let names = [];
        for (let pokemon of pokeList) {
            names.push(pokemon.name)
        }
        return names;
    });

    const GetGen6 = async () => {
        const response = await
            axios.get("https://pokeapi.co/api/v2/pokemon?offset=649&limit=72")
        return response.data.results;
    };
    GetGen6().then(pokeList => {
        let names = [];
        for (let pokemon of pokeList) {
            names.push(pokemon.name)
        }
        return names;
    });

    const GetGen7 = async () => {
        const response = await
            axios.get("https://pokeapi.co/api/v2/pokemon?offset=721&limit=88")
        return response.data.results;
    };
    GetGen7().then(pokeList => {
        let names = [];
        for (let pokemon of pokeList) {
            names.push(pokemon.name)
        }
        return names;
    });

    const GetGen8 = async () => {
        const response = await
            axios.get("https://pokeapi.co/api/v2/pokemon?offset=809&limit=89")
        return response.data.results;
    };
    GetGen8().then(pokeList => {
        let names = [];
        for (let pokemon of pokeList) {
            names.push(pokemon.name)
        }
        return names;
    });

    const constructButtons = async nameList => {
        let buildList = [];
        for(let placeName of nameList) {
            // console.log(name);
            const response = await
                axios.get(`https://pokeapi.co/api/v2/pokemon/${placeName}`)
            let id = response.data.id;
            let name = response.data.name;
            let img = response.data.sprites.front_default;
            let pokeArray = [id, name, img];
            buildList.push(pokeArray);
        }
        return buildList;
    }

    return (
        <div>
            {setPokemon}
        </div>
    )
}

export default GetPokemon;