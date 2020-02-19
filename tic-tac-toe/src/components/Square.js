import React, { Component } from 'react';
class Square extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    render() {

        return (
        <div>
           <button className="square"
                   onClick={this.props.onClick} >
                       {this.props.value}
            </button>
        </div>
    );
    }
}


export default Square;