import React, {Component} from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    handleChanges = e => {
        this.setState({
            item: e.target.value
        });
    };

    render() {
        return (
            <form>
                <input 
                    type='text'
                    value={this.state.item}
                    name='item'
                    onChange={this.handleChanges}
                />
                <button className='add-btn'>Add Todo</button>
                <button className='delete-btn'>Delete Todos</button>
            </form>
        )
    }
}

export default TodoForm;
