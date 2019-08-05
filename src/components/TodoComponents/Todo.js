import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div 
            // Can't get the css module to work with this project. Had to use inline styles.
            // className={`item${props.item.completed ? ' completed' : ''}`}
            style={props.item.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}
            onClick={() => props.toggleItem(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;