import React from 'react';

export default class ChildComponent extends React.Component {

    render() {
        return (
            <div>
                <h3>{this.props.count}</h3>
            </div>
        );
    }
}