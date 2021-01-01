import React, {useState, useRef, useEffect} from 'react';
import pokeball from './Images/pokeball1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import TypeModal from "./TypeModal";

const NavbarIndex = () => {
    const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const callback = (isOpen, showModal) => {
        setIsOpen(!isOpen);
        setShowModal(!showModal);
    }

    let modalNode = useRef(null);
    let pokeballNode = useRef(null);

    const handleClick = e => {
        if (showModal == true || !pokeballNode.current.contains(e.target)) {
            setIsOpen(!isOpen)
        }
        else if(pokeballNode.current.contains(e.target))
        setIsOpen(isOpen);
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
                    <ul>
                        <li className={"dropdown-link"}>
                            <Link to={"/profile"} onClick={() => setIsOpen(!isOpen)} className={"nav-links"}
                            >Profile</Link>
                        </li>
                        <li className={"dropdown-link"}>
                            <button className={"nav-links"}>Search</button>
                        </li>
                        <li className={"dropdown-link"}>
                            <button onClick={() => setShowModal(!showModal)
                            }>Filter Type
                            </button>
                        </li>
                    </ul>
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
                    <RenderDropdown onClick={!isOpen}/>
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