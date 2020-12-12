//1. import
import React from 'react';
import {Router, Route, Link} from 'react-router-dom';

import NavbarIndex from "./NavbarIndex";
import Welcome from "./Welcome";
import history from "../history";
import Register from "./Register";
import SignIn from "./SignIn";
import UserProfile from "./UserProfile";

// import Info from "./Info";
import EventTest from "./EventTest";
import "./Style/App.css"
import "./Style/NavbarIndex.css"
import ReactDOM from "react-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavbarStatePlay from "./NavbarStatePlay";

//2. create function to return JSX
const App = () => {
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
            <Router history={history}>
            <NavbarIndex/>
            {/*<NavbarStatePlay />*/}
           <Route path={"/"} exact component={Welcome}/>
           <Route path={"/register"} exact component={Register}/>
           <Route path={"/sign-in"} exact component={SignIn}/>
           <Route path={"/profile"} exact component={UserProfile}/>
           {/*<div>{renderNames}</div>*/}
            <EventTest />

            </Router>

        </div>
    )
}

//3. export the function
export default App;