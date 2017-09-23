import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    }
  }

  getTodos() {
    this.setState({ 
      todos: [
        { id: 1, title: 'Learn React', category: 'Front-end Development', priority: 'Important', completed: false },
        { id: 2, title: 'Wash the dishes', category: 'Housekeeping', priority: 'Low', completed: false },
        { id: 3, title: 'Buy food', category: 'Shopping', priority: 'Medium', completed: true },
        { id: 4, title: 'Learn Redux', category: 'Front-end Development', priority: 'High', completed: false },
      ],
    });
  }

  componentWillMount() {
    this.getTodos();
  }

  handleAddTodo(newTodo) {
    let todos = [...this.state.todos, newTodo];
    this.setState({todos: todos});
  }

  handleDeleteTodo(id) {
    let todos = this.state.todos;
    const index = todos.findIndex( (x) => x.id === id);

    if (index > -1) {
      todos.splice(index, 1);
      this.setState({todos: todos});
    }
  }

  handleFakeTodos(fakeData) {
    this.setState({todos: fakeData});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to To-do App</h2>
        </div>
        <AddTodo addTodo={this.handleAddTodo.bind(this)} getFakeTodos={this.handleFakeTodos.bind(this)} />
        <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)} />
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array,
  onDelete: PropTypes.func
}

export default App;
