import React from 'react';
import Container from 'react-bootstrap/Container';

class EventTest extends React.Component {
state = {color : 'blue'}
    renderRectangle() {
        return (
            <div style={{backgroundColor: this.state.color, padding : "100px"}}>
                <p>This is a test</p>
            </div>
        )
    }

    renderRedButton() {
        return (
            <div>
                <button type={'button'}>Change to Red</button>
            </div>
        )
    }

    render() {
        return (
            <Container>
                {this.renderRectangle()}
                {this.renderRedButton()}
            </Container>
    )}
}

export default EventTest;