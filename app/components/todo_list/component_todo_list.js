import React, { Component, PropTypes } from 'react';

import './style.scss';


class TodoList extends Component {

    _makeTodoItem(item) {
        return (
            <div className={`todo-task${item.isDone ? ' done' : ''}`} key={item.id}>
                <span className="todo-task__title">{item.title}</span>
                <input
                    type="checkbox"
                    onChange={this.props.onClickTaskDone.bind(this, item.id, !item.isDone)}
                    checked={item.isDone}
                />
                <a
                    onClick={this.props.onTaskDelete.bind(this, item)}
                    className="task-delete-btn"
                ><i className="fa fa-times"></i></a>
            </div>
        )
    }

    render() {
        let todoList = this.props.todoList.map((item)=> {
            return this._makeTodoItem(item);
        });

        return (
            <div className="todo-list">
                {todoList.length
                    ? todoList
                    : <div className="empty-todo-notice">Задач нет...</div> }
            </div>
        );
    }
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired
    })).isRequired,

    onClickTaskDone: PropTypes.func.isRequired,
    onTaskDelete: PropTypes.func.isRequired
};

export default TodoList;
