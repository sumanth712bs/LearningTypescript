import React from 'react';

export class InitialStateLesson extends React.Component {

    constructor() {
        super();
        this.state = {
          name: "sumanth",
          age: 28
        }
    
      }

    render() {
        return (
          <div>
            <h1>{this.state.name}</h1>
            <h3>{this.state.age} Years old</h3>
          </div>
        );
      }
}