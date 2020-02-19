import React from 'react';

export default class HandleEvents extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <img  src="https://placebeard.it/200x200" alt="a" onMouseOver={() => console.log('Hovered')}/>
                <br />
                <br />
                <button onClick={() => console.log('Clicked')}>Click me</button>
            </div>
        );
    }
}