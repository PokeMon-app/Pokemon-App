import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Style/App.css'
import pokeball from './Images/pokeball1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import TypeModal from './TypeModal';

const NavbarIndex = () => {
    const [show, setShow] = useState(false);

    const pokeballImg = () => {
        return (
            <img className={"pokeball"} src={pokeball} alt="pokeball"/>
        )
    }




    return (

        //Navdropdown can technically be a state change...
        <React.Fragment>
        <Navbar className={"nav mb-5"}>
            <Link to={"/"}>
                <NavbarBrand>PokeTeam Builder</NavbarBrand>
            </Link>
            <Link to={"/register"}>
                <p>Register</p>
            </Link>
            <Link to={"/sign-in"}>
                <p>Sign In</p>
            </Link>
            {/* WILL SHOW ON LARGER SCREEN SIZES*/}
            <div className={"ml-auto"}>
                <div className={"d-flex"}>
                    {/*<Form className={""}>*/}
                    {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>*/}
                    {/*</Form>*/}
                    {/*<div className={"d-block my-2 mr-3"}>*/}
                    {/*    <button className={"buttonInner"} type={'button'}>*/}
                    {/*        <img className={"pokeball"} src={pokeball} alt="pokeball"/>*/}
                    {/*    </button>*/}
                    {/*    <Nav className={"d-none openPokeball"}>*/}
                    {/*        <Nav.Link className={"profileLink"} >Profile</Nav.Link>*/}
                    {/*        <Nav.Link className={"teamsLink"} >Teams</Nav.Link>*/}
                    {/*    </Nav>*/}
                    {/*</div>*/}
                    <NavDropdown title={pokeballImg()} id="basic-nav-dropdown" className={"mr-1"}>
                        <NavDropdown.Item><Link to={"/profile"}>Profile</Link></NavDropdown.Item>
                        <NavDropdown.Item>
                            Search
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setShow(true)}>Filter Type</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
        </Navbar>
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