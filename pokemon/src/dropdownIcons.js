import React from 'react';
import Nav from "react-bootstrap/Nav";

const dropdownIcons = () => {

    return (
        <div className={"d-none openPokeball"}>
            {/* SMALL SCREEN SIZES*/}
            <div>
            <Nav.Link className={"profileLink"} >Profile</Nav.Link>
            <Nav.Link className={"teamsLink"} >Teams</Nav.Link>
        </div>
        </div>

    )
}
export