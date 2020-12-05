import React from 'react';
import Container from 'react-bootstrap/Container';

class EventTest extends React.Component {
    state = {color: 'blue', index: 0, input: "Test 1"}

    renderRectangle() {
        const listColors = ['blue', 'red', 'green', 'orange'];
        return (
            <div className={"my-2"} style={{backgroundColor: listColors[this.state.index], padding: "100px"}}>
                <p>{this.state.input}</p>
            </div>
        )
    }

    changeColor() {
        if (this.state.index === 3)
            this.setState({index: 0});
        else {
            let number = this.state.index;
            number++;
            this.setState({index: number});
            console.log(this.state.index);
        }
    }

    //create an input that will change the text inside of the rectangle live - utilize onChange()
    inputObject() {
        return (
            <div className={"my-2"}>
                <label className={"mr-2"}>Dynamic Input:</label>
                <input onChange={(event) => this.dynamicInput(event.target.value)} type="text"/>
            </div>
        )
    }

    dynamicInput(value) {
        this.setState({input : value});
    }

    renderRedButton() {
        return (
            <div className={"my-2"}>
                <button onClick={() => this.changeColor()} type={'button'}>Change to Red</button>
            </div>
        )
    }

    render() {
        return (
            <Container>
                {this.inputObject()}
                {this.renderRectangle()}
                {this.renderRedButton()}
            </Container>
        )
    }
}

export default EventTest;