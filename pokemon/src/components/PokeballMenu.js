import React, {useState} from 'react';
import './Style/PokeballMenu.css';
import {Link} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import TypeModal from "./TypeModal";


function PokeballMenu(props) {

    const [show, setShow] = useState(false);
    const [openPokeball, closePokeball] = useState(true);

    // const handleClick = () => {
    //     if(openPokeball === true)
    //         closePokeball(false)
    //     else
    //         closePokeball(true)
    // };
    //Will need to set a Hook that will close the pokeball when a user clicks on profile
    //Will need to close the pokeball when a user searches or clicks on a type icon

    return (
        <React.Fragment>
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
    );
}

export default PokeballMenu;