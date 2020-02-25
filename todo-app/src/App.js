import React, {useEffect, useState} from 'react';
import './App.css';
import Todos from "./components/Todo";

function App() {
    const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
    const [result, setResult] = useState([]);

    const getTodos = async () => {
        const data = await fetch(TODOS_URL)
            .then(response => response.json());
        setResult(data);
    };

    useEffect(() => {
        getTodos()
    }, []);

    return (
        <div>
            <h1> My Daily To-Do List </h1>
            <table className="MainTable">
                <thead className="TableHeader">
                <tr>
                    <th className="TableDefinition">Id</th>
                    <th className="TableDefinition">Title Name</th>
                    <th className="TableDefinition">Completed</th>
                </tr>
                </thead>
                {result.map(res => (
                    <Todos key={res.id} id={res.id} title={res.title} completed={res.completed}/>
                ))}
            </table>

        </div>
    );
}

export default App;
