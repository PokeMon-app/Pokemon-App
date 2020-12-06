import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Style/App.css'
import pokeball from './Images/pokeball1.png';

const NavbarIndex = () => {

    return (

        //Navdropdown can technically be a state change...
        <div className={"nav"}>
            <h4>PokeTeam Builder</h4>
            {/* WILL SHOW ON LARGER SCREEN SIZES*/}
            <Form className={"mt-3 ml-auto d-none d-md-block"}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
            </Form>
            <button className={"my-2 ml-5 mr-3 d-none d-md-block"}>
                <button className={"button-inner"}>
                    <img className={"pokeball"} src={pokeball} alt="pokeball"/>
                </button>
            </button>

            {/* WILL SHOW ON SMALL SMALL AND XS SCREENS*/}
            <div className={"my-2 ml-auto mr-3 d-md-none"}>
                <button className={"pokeball"}>
                    <button className={"button-inner"}>
                        <img className={"pokeball"} src={pokeball} alt="pokeball"/>
                    </button>
                </button>
            </div>

        </div>
    )
}

export default NavbarIndex;