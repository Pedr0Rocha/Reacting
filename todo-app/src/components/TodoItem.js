import React, { Component } from 'react';

const listStyle = {
  textAlign: 'left',
};

class TodoItem extends Component {
	deleteTodo(id) {
		this.props.onDelete(id);
	}

  render() {
    return (
    	<li className="todoItem" style={listStyle}>
    		<strong>#{this.props.index}</strong> - {this.props.todo.title} ({this.props.todo.category}) 
    		<button onClick={this.deleteTodo.bind(this, this.props.todo.id)}>X</button>
    		<p>Priority: {this.props.todo.priority}</p>
    	</li>
    );
  }
}


export default TodoItem;
