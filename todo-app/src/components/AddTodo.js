import React, { Component } from 'react';

const styles = {
  addTodoBox: {
    textAlign: 'left',
    marginLeft: '40px',
  },

  submitButton: {
    padding: '5px',
    backgroundColor: '#222',
    color: '#fff',
    fontSize: '12px',
    letterSpacing: '1.2px',
    marginTop: '8px',
    border: 'none',
    width: '154px',
    cursor: 'pointer',
  }
}

class AddTodo extends Component {
  constructor() {
    super();

    this.state = {
      newTodo: {},
    }
  }

  static defaultProps = {
    priority: ['Important', 'High', 'Medium', 'Low'],
  }

  createNewTodo(e) {
    console.log("New todo created");
    e.preventDefault();
  }

  render() {
    let priorityOptions = this.props.priority.map( (priority) => {
      return <option key={priority} value="priority">{priority}</option>
    });

    return (
      <div style={styles.addTodoBox}>
        <h3>Add To Do</h3>
        <form onSubmit={this.createNewTodo.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <input type="text" ref="category" />
          </div>
          <div>
            <label>Priority</label><br />
            <select ref="priority">
              {priorityOptions}
            </select>
          </div>
          <button type="submit" value="submit" style={styles.submitButton}>CREATE</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
