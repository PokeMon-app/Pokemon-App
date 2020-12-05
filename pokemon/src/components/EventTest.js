import React from 'react';
import Container from 'react-bootstrap/Container';

class EventTest extends React.Component {

    render() {
        return (
            <Container>
                <div style={{backgroundColor: "blue", padding : "100px"}}>
                    <p>This is a test</p>
                </div>
            </Container>
    )}
}

export default EventTest;