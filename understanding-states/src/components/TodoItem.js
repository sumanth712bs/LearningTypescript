import React from 'react';

export default class TodoItem extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {...this.props};
    // }

    render() {
        console.log("Todo's Data = ", this.props);
        console.log("Bool = ", this.props.todoItem.completed);
        // console.log("States = ", this.state.todoItem.completed)
        return (
            <div>
                <input 
                    type="checkbox" 
                    checked={this.props.todoItem.completed} 
                    onChange={() => this.props.changeMe(this.props.todoItem.id)}
                />
                <p>{this.props.todoItem.text}</p>
            </div>
        );
    }
}