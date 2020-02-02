import React from 'react';

export default function Joke(props) {
    console.log(props);
    console.log(props.question);
    return (
        <div>

            <p style={{ display: props.question ? 'block' : "none" }}> Question: {props.question}</p>

            <p> Answer: {props.answer}</p>
            <hr />
        </div>
    );

}

