import React from 'react';
import './styles/App.css';
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';
import jokesData from './constants/JokesData';
import { productsData } from './constants/productsData';
import Product from './components/ProductComponent';
import todosData from './constants/todosData';
import TodoItem from './components/TodoItem';


function App() {


  const jokeComponents = jokesData.map(x => <Joke key={x.id} question={x.question} answer={x.answer} />);
  const productComponents = productsData.map(product => <Product product={product} key={product.id} />);

  const todoComponents = todosData.map(todoItem => <TodoItem todoItem={todoItem} key={todoItem.id} />);

  return (
    <div className="contacts">
      <h1> Todo Example</h1>
      {todoComponents}
      <hr />
      <h1>Product Example</h1>
      {productComponents}
      <hr/>
      <h1>Joke's Example</h1>
      {jokeComponents}
      <hr />
      <h1>Contact card Example</h1>
      <ContactCard
        contact={{
          name: "Kitty One",
          imgUrl: "http://placekitten.com/g/200/300",
          phone: "123 456 7890",
          email: "sample@gmail.com"
        }}
      />

      <ContactCard
        contact={{
          name: "Kitty Two",
          imgUrl: "http://placekitten.com/g/200/200",
          phone: "321 456 7890",
          email: "sample2@gmail.com"
        }}
      />
      <hr/>
    </div>
  );
}

export default App;
