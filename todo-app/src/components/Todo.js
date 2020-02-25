import React from "react";
import '../App.css';

const Todos = ({id, title, completed}) => {
    return (
        <tbody className="TableBody">
        <tr>
            <td className="TableDefinition">{id}</td>
            <td className="TableDefinition">{title}</td>
            <td className="TableDefinition">{completed ? 'true' : 'false'}</td>
        </tr>
        </tbody>
    );
};

export default Todos;