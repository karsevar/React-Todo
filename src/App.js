import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const mockData = [
  {
    task: 'Write the app component component class',
    id: 1,
    completed: false
  },
  {
    task: 'Call the class component React component (React.Component)',
    id: 2,
    completed: false
  },
  {
    task: 'Call constructor()',
    id: 3,
    completed: false
  },
  {
    task: 'setup the state in the constructor',
    id: 4,
    completed: false
  },
  {
    task: 'call render',
    id: 5,
    completed: false
  },
  {
    task: 'call return',
    id: 6,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: [...mockData]
    }
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoData: [...this.state.todoData, newItem]
    });

    console.log(this.state.todoData);
  };

  render() {
    return (
      <div className='app'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoData={this.state.todoData} 
        />
        <TodoForm 
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default App;
