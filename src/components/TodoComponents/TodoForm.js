import React, {Component} from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    handleDelete = e => {
        e.preventDefault();
        
        this.props.deleteItems();
    }

    handleChanges = e => {
        this.setState({
            item: e.target.value
        });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        
        // console.log(this.state.item);
    }

    render() {
        return (
            <>
                <form onSubmit={this.submitItem}>
                    <input 
                        type='text'
                        value={this.state.item}
                        name='item'
                        onChange={this.handleChanges}
                    />
                    <button className='add-btn'>Add Todo</button>
                    <button className='delete-btn' onClick={this.handleDelete}>Delete Todos</button>
                </form>
            </>
        )
    }
}

export default TodoForm;
