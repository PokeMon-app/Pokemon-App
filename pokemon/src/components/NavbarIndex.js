import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Dropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Style/App.css'
import pokeball from './Images/pokeball1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const NavbarIndex = () => {

    return (

        //Navdropdown can technically be a state change...
        <Navbar className={"nav mb-5"}>
            <Link to={"/"}>
            <NavbarBrand>PokeTeam Builder</NavbarBrand>
            </Link>
            {/* WILL SHOW ON LARGER SCREEN SIZES*/}
            <div className={"d-none d-md-block ml-auto"}>
                <div className={"d-flex"}>
                    <Form className={""}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    </Form>
                    <div className={"d-block my-2 mr-3"}>
                        <button className={"buttonInner"} type={'button'}>
                            <img className={"pokeball"} src={pokeball} alt="pokeball"/>
                        </button>
                        <Nav className={"d-none openPokeball"}>
                            <Nav.Link className={"profileLink"} >Profile</Nav.Link>
                            <Nav.Link className={"teamsLink"} >Teams</Nav.Link>
                        </Nav>
                    </div>
                </div>
            </div>

            {/* WILL SHOW ON SMALL SMALL AND XS SCREENS*/}
            <div className={"my-2 ml-auto mr-3 d-md-none d-flex"}>
                <button className={"mx-5"}>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
                <div className={"border d-flex justify-content-center"}>
                    <button className={"buttonInner"}>
                        <img className={"pokeball"} src={pokeball} alt="pokeball"/>
                    </button>
                </div>
            </div>

        </Navbar>
    )
}

export default NavbarIndex;