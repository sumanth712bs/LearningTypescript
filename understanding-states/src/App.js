import React from 'react';
import './App.css';
import { InitialStateLesson } from './components/InitialStateLesson';
import { StateTest } from './components/StateTest';
import todosData from './constants/todosData';
import TodoItem from './components/TodoItem';
import HandleEvents from './components/HandleEvents';
import ChangingStates from './components/ChangingStates';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      todos: todosData,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
    
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {todos: updatedTodos}
    })
  }

/* 
handleChange = event  => {
  const {name, value} = event.target
  console.log("Name = ",name);
  console.log("Value = ",value);
  console.log("event = ", event.target)
  this.setState({
    [name]:value
  })
} */
  render() {
    const todosComponents = this.state.todos.map(item => 
    <TodoItem 
          key={item.id} 
          todoItem={item} 
          changeMe={this.handleChange}
    />)
    return (
      <div>
        <h3>Inital States Lesson</h3>
        <InitialStateLesson />
        <hr />

        <h3>Testing States understanding</h3>
        <StateTest />
        <hr />

        <h3> Continuing Todo App with States</h3>
        {todosComponents}
        <hr />

        <h3>Handling Events</h3>
        <HandleEvents />
        <hr />

        <h3>Changing States - Example</h3>
        <ChangingStates />
      </div>
    );
  }
  

  
}

export default App;
