import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

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

  formatData(data) {
    const newData = data.map( (props) => {
      props.priority = this.props.priority[Math.floor(Math.random() * this.props.priority.length)];
      props.category = 'Fake data';
      return props;
    });
    return newData;
  }

  handleGetFakeTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        const fakeData = this.formatData(data);
        this.props.getFakeTodos(fakeData);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      },
    })
  }

  isFormValid(data) {
    if (data.title.value === '') {
      alert("Title can't be empty!");
      return false;
    } else if (data.category.value === '') {
      alert("Category can't be empty!");
      return false;
    }
    return true;
  }

  clearForm() {
    this.refs.title.value = '';
    this.refs.category.value = '';
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = this.refs;

    if (this.isFormValid(formData)) {
      this.setState({ 
        newTodo: {
          id: Math.floor(Math.random() * 65536),
          title: formData.title.value,
          category: formData.category.value,
          priority: formData.priority.value,
        }
      }, () => {
        this.props.addTodo(this.state.newTodo);
        this.clearForm();
      });
    }
  }

  render() {
    let priorityOptions = this.props.priority.map( (priority) => {
      return <option key={priority} value={priority}>{priority}</option>
    });

    return (
      <div style={styles.addTodoBox}>
        <h3>Add To Do</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
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
        <button onClick={this.handleGetFakeTodos.bind(this)} style={styles.submitButton}>GET FAKE TODO'S</button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  priority: PropTypes.array,
  addTodo: PropTypes.func,
  getFakeTodos: PropTypes.func, 
}

export default AddTodo;
