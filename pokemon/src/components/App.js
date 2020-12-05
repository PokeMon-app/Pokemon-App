//1. import
import React from 'react';
import NavbarIndex from "./NavbarIndex";
import Info from "./Info";
import EventTest from "./EventTest";


//2. create function to return JSX
const App = props => {
    //state = {nameOfState : defaultValue} - defaultValue

    const pokeMon = [
        {name:"Ivysaur", description:"green pokemon", type:"grass"},
        {name:"Charmeleon", description:"lizard pokemon", type:"fire"},
        {name:"Wartortle", description:"turtle pokemon", type:"water"}];
    // const renderNames = pokeMon.map(({name,description,type}) => {
    //     return (
    //         <div>
    //             <h1>{name}</h1>
    //             <p>{description}</p>
    //             <h6>{type}</h6>
    //         </div>
    //     )
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
            <h1>Yo Yo Yo</h1>
            <br/>
            <p>Love from Mars!</p>
            <Info name={"Bulbasaur"} description={"green pokemon"} type={"grass"}/>
            <Info name={"Charmander"} description={"lizard pokemon"} type={"fire"}/>
            <Info name={"Squirtle"} description={"turtle pokemon"} type={"water"}/>
            <div>{renderNames}</div>
            <EventTest/>
        </div>
    )
}

//3. export the function
export default App;