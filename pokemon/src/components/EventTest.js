import React from 'react';
import Container from 'react-bootstrap/Container';

class EventTest extends React.Component {

    renderRectangle() {
        return (
            <div style={{backgroundColor: "blue", padding : "100px"}}>
                <p>This is a test</p>
            </div>
        )
    }

    render() {
        return (
            <Container>
                {this.renderRectangle()}
            </Container>
    )}
}

export default EventTest;