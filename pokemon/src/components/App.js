//1. import
import React from 'react';
import NavbarIndex from "./NavbarIndex";
import Welcome from "./Welcome";
// import Info from "./Info";
import EventTest from "./EventTest";
import "./Style/App.css"
import "./Style/NavbarIndex.css"


//2. create function to return JSX
const App = props => {
    //state = {nameOfState : defaultValue} - defaultValue

    const pokeMon = [
        {name: "Bulbasaur", description: "green pokemon", type:"grass"},
        {name:"Ivysaur", description:"green pokemon", type:"grass"},
        {name:"Venusaur", description: "green pokemon", type: "grass"},
        {name:"Squirtle", description: "turtle pokemon", type: "water"},
        {name:"Wartortle", description:"turtle pokemon", type:"water"},
        {name:"Blastoise", description: "turtle pokemon", type: "water"},
        {name:"Charmander", description: "lizard pokemon", type: "fire"},
        {name:"Charmeleon", description:"lizard pokemon", type:"fire"},
        {name:"Charizard", description: "lizard pokemon", type: "fire"}];
    const renderNames = pokeMon.map(pokemon => {
        return (
            <div key={pokemon.name}>
                <h1>{pokemon.name}</h1>
                <p>{pokemon.description}</p>
                <h6>{pokemon.type}</h6>
            </div>
        )
    })
    return (
        <div>
            <NavbarIndex/>
            <Welcome/>
            <div>{renderNames}</div>
            <EventTest/>
        </div>
    )
}

//3. export the function
export default App;