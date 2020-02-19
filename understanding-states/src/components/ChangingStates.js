import React from 'react';
import ChildComponent from './ChildComponent';

export default class ChangingStates extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        
        this.updateAllStates = this.updateAllStates.bind(this);
    }

    updateAllStates() {
        this.setState(prevState => {
            return {
                count: prevState.count+1
            }
        })
    }

    render() {
        return (
            <div style={{ margin: 20 }}>
                <h1 style={{ margin: 15 }}>{this.state.count}</h1>
                <button onClick={this.updateAllStates}>Change</button>
                <ChildComponent count={this.state.count} />
            </div>
        )
    }
}