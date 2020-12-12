import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import TypeModal from "./TypeModal";
import pokeball from "./Images/pokeball1.png";

class NavbarStatePlay extends React.Component {
    container = React.createRef();
    state = {
        open: false,
    };
    handleButtonCLick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };


    pokeballImg() {
        return (
            <button className={"buttonInner openPokeball"} type={'button'} onClick={this.handleButtonCLick}>
                <img className={"pokeball"} src={pokeball} alt="pokeball"/>
            </button>
        )
    }

    render() {
        return (
        <div>
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

                <div className={"ml-auto mr-3 drop-icon"}
                     ref={this.container}>
                    <div className={""}>
                        {this.pokeballImg()}
                    </div>
                    {this.state.open && (
                    <div className={"pokeball-menu"}>
                        <ul>
                            <li className={"dropdown-link"}>
                                <Link to={"/profile"} className={"nav-links"}
                                    // onClick={handleClick()}
                                >Profile</Link>
                            </li>
                            <li className={"dropdown-link"}>
                                <button className={"nav-links"}>Search</button>
                            </li>
                            <li className={"dropdown-link"}>
                                <button
                                    // onClick={() => setShow(true)
                                    // && closePokeball}
                                >Filter Type</button>
                            </li>
                        </ul>
                    </div>
                    )}
                </div>
            </nav>

        </div>
        )
    }
}

export default NavbarStatePlay;