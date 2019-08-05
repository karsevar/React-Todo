// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.todoData.map(item => {
               return <Todo key={item.key} item={item} />
            })}
        </div>
    )
};

export default TodoList;

