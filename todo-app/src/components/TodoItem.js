import React, { Component } from 'react';

const listStyle = {
  textAlign: 'left',
};

class TodoItem extends Component {
  render() {
    return (
    	<li className="todoItem" style={listStyle}>
    		<strong>#{this.props.index}</strong> - {this.props.todo.title} ({this.props.todo.category})
    		<p>Priority: {this.props.todo.priority}</p>
    	</li>
    );
  }
}


export default TodoItem;
