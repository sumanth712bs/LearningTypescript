import React from 'react';

export class StateTest extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn: true 
        }
    }
    
     getLoggedInState() {
        let worldDisplay;
        if(this.state.isLoggedIn) {
            worldDisplay = "in";
        } else {
            worldDisplay = "out"
        }
        return worldDisplay;
    }

    render () {
    
        return(
        <div>
            <h4> You are currently logged {this.getLoggedInState()} </h4>
        </div>);
    }
}