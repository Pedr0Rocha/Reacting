import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;

    if (this.props.todos) {
      todoItems = this.props.todos.map( (todo) => {
        return (
          <TodoItem key={todo.id} todo={todo} />
        );
      });
    }

    return (
      <div className="Todos">
        <p className="App-intro" style={{textAlign: 'left', marginLeft: '40px'}}>
          <strong>To Do List</strong>
        </p>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}

export default Todos;
