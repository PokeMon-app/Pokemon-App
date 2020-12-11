import React, {useState} from 'react';
import './Style/App.css'
import pokeball from './Images/pokeball1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import PokeballMenu from './PokeballMenu';

const NavbarIndex = () => {
    //Hooks return an array with two values [currentState, updatedState]
    //useState() passed value is the default state
    //for example: const [count, setCount] = useState(4);
    //the default state is 4, current state is also 4 and we can update the state value with setCount
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => {
        if(dropdown === true)
        setDropdown(false)
        else
            setDropdown(true)
    };

    const pokeballImg = () => {
        return (
            <button className={"buttonInner" + (!dropdown ? " closedPokeball" : " openPokeball")} type={'button'}>
                <img className={"pokeball"} src={pokeball} alt="pokeball"/>
            </button>
        )
    }

    return (
        <React.Fragment>
            <nav className={"nav d-flex"}>
                <Link to={"/"}>
                    <h4>PokeTeam Builder</h4>
                </Link>
                <Link to={"/register"}>
                    <p>Register</p>
                </Link>
                <Link to={"/sign-in"}>
                    <p>Sign In</p>
                </Link>
                <div className={"ml-auto mr-3"} onClick={handleClick}>
                    <div className={""}>
                        {pokeballImg()}
                    </div>
                </div>
            </nav>
            <div className={!dropdown ? 'pokeball-menu clicked' : 'pokeball-menu'}>
                {<PokeballMenu/>}
            </div>
        </React.Fragment>
    )
}

export default NavbarIndex;