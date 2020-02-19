import React from 'react';
/*
function ContactCard(props) {   
    
    console.log(props);
    return (
        
        <div className="contact-card">
            <img alt="aa" src={props.contact.imgUrl} />
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
        );

}
*/
class ContactCard extends React.Component {
    
    constructor(props) {
        super(props);
        console.log("Constructor - Contact Card");
        console.log("Conatct card Phone = "+ this.props.contact.phone);
    }

    render() {
        return (<div className="contact-card">
        <img alt="aa" src={this.props.contact.imgUrl} />
        <h3>{this.props.contact.name}</h3>
        <p>Phone: {this.props.contact.phone}</p>
        <p>Email: {this.props.contact.email}</p>
    </div>);
    }

}

export default ContactCard;