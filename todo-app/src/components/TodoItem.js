import React, { Component } from 'react';
import PropTypes from 'prop-types';

const listStyle = {
  textAlign: 'left',
};

const taskStyles = {
	completed: {
		textDecoration: 'line-through'
	},
};

const deleteBtnStyle = {
	borderRadius: '50%',
	padding: '4px 8px',
	border: 'none',
	color: '#fff',
	backgroundColor: 'red',
	marginLeft: '8px',
	cursor: 'pointer',
};

const priorityStyles = {
	text: {
		marginTop: '2px',
	},
	important: {
		color: 'red'
	},
	high: {
		color: 'orange',
	},
	medium: {
		color: 'blue',
	},
	low: {
		color: 'darkcyan',
	}
}

class TodoItem extends Component {
	deleteTodo(id) {
		this.props.onDelete(id);
	}

	getPriorityStyle(priority) {
		switch (priority) {
			case 'Important':
				return priorityStyles.important;
			case 'High':
				return priorityStyles.high;
			case 'Medium':
				return priorityStyles.medium;
			case 'Low':
				return priorityStyles.low;
			default:
				return priorityStyles.low;
		}
	}

  render() {
  	const taskStyle = this.props.todo.completed ? taskStyles.completed : taskStyles.notCompleted;
  	const priorityStyle = this.getPriorityStyle(this.props.todo.priority);

    return (
    	<li className="todoItem" style={listStyle}>
    		<span style={taskStyle}>
    			<b>#{this.props.index}</b> - {this.props.todo.title} ({this.props.todo.category})
    		</span>
    		<button onClick={this.deleteTodo.bind(this, this.props.todo.id)} style={deleteBtnStyle}>
    			X
    		</button>
    		<p style={priorityStyles.text}>
    			Priority: <span style={priorityStyle}>{this.props.todo.priority}</span>
    		</p>
    	</li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func
}

export default TodoItem;
