import React from 'react';

function TodoItem(props) {
console.log("Todo's Data = ", props)
console.log("Bool = ", props.todoItem.completed)
    return(
        <div>
            <input type="checkbox" checked={props.todoItem.completed} />
            <p>{props.todoItem.text}</p>
        </div>
    );
}

export default TodoItem;