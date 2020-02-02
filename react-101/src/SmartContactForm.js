import React from 'react';
import { SmartInputElement } from './SmartInputElement';

export class SmartContactForm extends React.Component  {
    
    render() {
        const firstName = 'Vorname';
        const lastName = 'Nachname';
        return (<div>
            <SmartInputElement fieldName = {firstName} id  = "firstname"></SmartInputElement>
            <SmartInputElement fieldName = {lastName} id="lastname"></SmartInputElement>
        </div>);
    }

}