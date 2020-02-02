import React from 'react';

export class SmartInputElement extends React.Component {
    render() {
        const { fieldName, id } = this.props;  

        return (
            <div>
                <label htmlFor={id}>{fieldName}<span>*</span></label>
                <input type="text"/>
            </div>
        );
    };
}