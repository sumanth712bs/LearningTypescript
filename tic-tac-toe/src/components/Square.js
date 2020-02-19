import React, { Component } from 'react';
class Square extends Component {

    render() { 
        
        const actualValue = this.props.value;
        
        return ( 
        <div>
           <button className="square" 
                   onClick={this.props.onClick} >
                       {actualValue}
            </button>
        </div> 
    );
    }
}
 

export default Square;