import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Welcome = () => {
    return (
        <Card className={"card"}>
            <h2>Welcome to PokeTeam Builder!</h2>
            <p>Our </p>
            <Link to={"/register"}>
                <p>Register</p>
            </Link>
        </Card>
    )
}

export default Welcome;