import React, {useState, useRef, useEffect} from 'react';
import pokeball from './Images/pokeball1.png';
import allTypes from './Images/all_types.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import TypeModal from "./TypeModal";

const NavbarIndex = () => {
    const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [searchStatus, setSearchStatus] = useState(false);

    const callback = (isOpen, showModal) => {
        setIsOpen(!isOpen);
        setShowModal(!showModal);
    }



    const searchTransition = (searchStatus) => {
        setSearchStatus(!searchStatus)
        console.log(searchStatus)
        if(isOpen == true) {
            setSearchStatus(!searchStatus);

        }
        else if(isOpen == false) {
            setSearchStatus(!searchStatus)
        }
    }
    let modalNode = useRef(null);
    let pokeballNode = useRef(null);
    //without any effects:
    // 1. MODAL and DROPDOWN closes when you click a type button;
    // 2. Only the MODAL closes when you click the CLOSEBUTTON
    // 3. DROPDOWN will open and close if you click on the pokeball

    // I need to find a way to close the menu when anywhere but the DROPDOWN or the MODAL is clicked

    const handleClick = e => {
        //what works? RESULT = NO CHANGE...
        // 1. MODAL and DROPDOWN closes when you click a type button;
        // 2. Only the MODAL closes when you click the CLOSEBUTTON
        // 3. DROPDOWN will open and close if you click on the pokeball
        // if(!pokeballNode.current.contains(e.target)) {
        //     setIsOpen(isOpen)
        // }

        //what works? RESULT = FUNCTIONALITY I WANT, BUT WITH THE DRAWBACK OF NOT FUNCTIONING DROPDOWN BUTTON...
        // 1. DROPDOWN will close if a click occurs outside the dropdown
        // 2. MODAL and DROPDOWN closes when you click a type button;
        // 3. MODAL and DROPDOWN closes when you click the CLOSEBUTTON
        // what doesn't work?
        // 1. DROPDOWN will not open and close if clicked on:
        //    if you click on the dropdown to close it, the dropdown will reopen immediately...
        // if(!pokeballNode.current.contains(e.target)) {
        //     setIsOpen(!isOpen)
        // }


        //TODO: write a conditional that will close the dropdown menu if (setShowModal == false && !pokeballNode.current.contains(e.target))
        //TODO: write a conditional that will close the dropdown menu after the modal closes and anywhere is clicked a second time

        //PROBLEM - this conditional will make it so that DROPDOWN doesn't open and close properly when clicked on...
        // if(!pokeballNode.current.contains(e.target) && showModal === false) {
        //     setIsOpen(!isOpen)
        // }
        // else if (pokeballNode.current.contains(e.target)) {
        //     setIsOpen(isOpen)
        // }
        // else if (!pokeballNode.current.contains(e.target)) {
        //     setIsOpen(isOpen)
        //     // console.log("Outer Click")
        // }
        // else if(!pokeballNode.current.contains(e.target) && showModal === false ) {
        //     console.log("Outer Click")
        // }

    }

    useEffect(() => {
        if (isOpen) document.addEventListener('mousedown', handleClick);
        else document.removeEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [ isOpen ]);

    const RenderDropdown = () => {
        if (isOpen === true) {
            return (
                <div ref={pokeballNode} className={'pokeball-menu'}>
                        <div className={"dropdown-link align-self-center"}>
                            <Link to={"/profile"} onClick={() => setIsOpen(!isOpen)}
                            ><FontAwesomeIcon icon={faUserCircle} size="2x" className={"profile-link"}></FontAwesomeIcon></Link>
                        </div>
                        <div className={"dropdown-link d-flex" + (searchStatus ? "" : " center-icon")}>
                            <FontAwesomeIcon icon={faSearch} size="2x" onClick={() => {searchTransition(searchStatus);}}
                            className={"nav-links circular align-self-center hover" + (searchStatus ? " search-hide" : " search-show")}></FontAwesomeIcon>
                            <div className={"search-container d-flex align-self-center" + (!searchStatus ? " search-hide" : " search-show")}>
                                <FontAwesomeIcon icon={faCaretRight} size="2x" className={"align-self-center hover " + (!searchStatus ? "search-hide" : "search-show")} onClick={() => {setSearchStatus(false)}}></FontAwesomeIcon>
                                <input className={"nav-links round-input" + (!searchStatus ? " search-hide" : " search-show")} placeholder={"Search..."} type={"text"}/>
                            </div>
                        </div>
                        <div className={"dropdown-link align-self-center"}>
                                <img className={(!showModal ? "all-types" : "all-types-active") + " p-1"} onClick={() => setShowModal(!showModal)
                                } src={allTypes} alt="Filter by types"/>
                        </div>
                </div>
            )
        }
        return null;
    }

    const pokeballImg = () => {
        return (
            <button className={"buttonInner" + (!isOpen ? " closedPokeball" : " openPokeball")}
                    type={'button'} onClick={() => {
                setIsOpen(!isOpen)
                if(isOpen != true) {
                    setSearchStatus(false)
                }
            }}>
                <img className={"pokeball"} src={pokeball} alt="pokeball"/>
            </button>
        )
    }

    return [

        (
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
                <div className={"ml-auto mr-3 drop-icon"}>
                    <div className={""}>
                        {pokeballImg()}
                    </div>
                    <RenderDropdown/>
                </div>
            </nav>

            <Modal
                ref={modalNode}
                show={showModal}
                onHide={() => setShowModal(!showModal)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TypeModal parentCallback={callback}/>
                </Modal.Body>
            </Modal>


        </React.Fragment>
    )]
}

export default NavbarIndex;