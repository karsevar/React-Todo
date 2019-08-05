import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

const mockData = [
  'Write the app component component class',
  'Call the class component React component (React.Component)',
  'Call constructor()',
  'setup the state in the constructor',
  'call render',
  'call return'
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
  render() {
    return (
      <div className='app'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoData={this.state.todoData} />
      </div>
    );
  }
}

export default App;
