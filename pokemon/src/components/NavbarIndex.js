import React, {useState, useRef} from 'react';
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
    const [show, setShow] = useState(false);


    //TODO: 1. create reference to access the element that where the state changes will occur
    const inputRef = useRef();

    //WORKS WITH HOOKS BUT NO FUNCTIONALITY FOR A USER
    // WHEN THEY CLICK A LIST ITEM OR CLICKING OUT OF MENU
    //----------------------------------------------------//
    // const handleClick = () => {
    //     if (dropdown === true)
    //         setDropdown(false)
    //     else
    //         setDropdown(true)
    //
    // };
    //TODO: 2. set the default value of the elements state
    const [dropdown, setDropdown] = useState(false);

    //TODO: 3. write a function that changes the state when the button is clicked
    const handleClick = () => {
        setDropdown(!dropdown)
    }
    //TODO: 4. write a function that changes the state when a user clicks anywhere on the screen
    const handleClickOutside = event => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setDropdown(!dropdown)
            // this.setState({
            //     open: false,
            // });
        }
    //TODO: 5. create event listeners that will
    const componentDidMount = () => {
        document.addEventListener("mousedown", handleClickOutside);
    }
    const componentWillUnmount = () => {
        document.removeEventListener("mousedown", handleClickOutside);
    }

    };



    const pokeballImg = () => {
        return (
            <button className={"buttonInner closedPokeball"
                //TODO: refactor styling to change with state change
            // + (!dropdown ? " closedPokeball" : " openPokeball")
                }
                    type={'button'} onClick={handleClick}>
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
                     // onClick={handleClick}
                     ref={inputRef.current}
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