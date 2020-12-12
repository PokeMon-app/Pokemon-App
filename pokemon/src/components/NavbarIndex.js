import React, {useState} from 'react';
// import './Style/App.css'
import pokeball from './Images/pokeball1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import PokeballMenu from './PokeballMenu';
import Modal from "react-bootstrap/Modal";
import TypeModal from "./TypeModal";

const NavbarIndex = () => {
    //Hooks return an array with two values [currentState, updatedState]
    //useState() passed value is the default state
    //for example: const [count, setCount] = useState(4);
    //the default state is 4, current state is also 4 and we can update the state value with setCount
    const [dropdown, setDropdown] = useState(false);
    const [show, setShow] = useState(false);
    // const [open, setDropdown] = useState(false);

    //WORKS WITH HOOKS BUT NO FUNCTIONALITY FOR A USER
    // WHEN THEY CLICK A LIST ITEM OR CLICKING OUT OF MENU
    //----------------------------------------------------//
    const handleClick = () => {
        if (dropdown === true)
            setDropdown(false)
        else
            setDropdown(true)

    };

    let container = React.createRef();



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
                <div className={"ml-auto mr-3 drop-icon"}
                     onClick={handleClick}
                     ref={this.container}
                >
                    <div className={""}>
                        {pokeballImg()}
                    </div>
                    <div className={!dropdown ? 'pokeball-menu clicked' : 'pokeball-menu'}>
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
                                <button onClick={() => setShow(true)
                                    // && closePokeball
                                }>Filter Type</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/*<div className={!dropdown ? 'pokeball-menu clicked' : 'pokeball-menu'}>*/}
            {/*    {<PokeballMenu/>}*/}
            {/*</div>*/}


            {/*<div className={!dropdown ? 'pokeball-menu clicked' : 'pokeball-menu'}>*/}
            {/*    <ul>*/}
            {/*        <li className={"dropdown-link"}>*/}
            {/*            <Link to={"/profile"} className={"nav-links"}*/}
            {/*                  */}
            {/*            >Profile</Link>*/}
            {/*        </li>*/}
            {/*        <li className={"dropdown-link"}>*/}
            {/*            <button className={"nav-links"}>Search</button>*/}
            {/*        </li>*/}
            {/*        <li className={"dropdown-link"}>*/}
            {/*            <button onClick={() => setShow(true)*/}
            {/*                // && closePokeball*/}
            {/*            }>Filter Type*/}
            {/*            </button>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TypeModal/>
                </Modal.Body>
            </Modal>


        </React.Fragment>
    )
}

export default NavbarIndex;