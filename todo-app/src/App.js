import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    }
  }

  componentWillMount() {
    this.setState({ 
      todos: [
        { id: 1, title: 'Learn React', category: 'Front-end Development', priority: 'Important' },
        { id: 2, title: 'Wash the dishes', category: 'Housekeeping', priority: 'Low' },
        { id: 3, title: 'Buy food', category: 'Shopping', priority: 'Medium' },
        { id: 4, title: 'Learn Redux', category: 'Front-end Development', priority: 'High' },
      ],
    });
  }

  updateTodoList(newTodo) {
    let todos = [...this.state.todos, newTodo];
    this.setState({todos: todos});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to To-do App</h2>
        </div>
        <AddTodo addTodo={this.updateTodoList.bind(this)} />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
