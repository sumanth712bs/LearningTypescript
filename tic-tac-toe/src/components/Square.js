import React from "react";

class Square extends React.Component {

    render() {
        return (
            <div className='square' onClick={this.props.onClick}>{this.props.passingValue}</div>
        )
    }
}

export default Square;