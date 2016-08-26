import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoList from '../../components/todo_list/component_todo_list';
import { setTaskDone, deleteTask } from '../../actions/actions_todo';
import { filterTodoList, searchByPattern } from '../../helpers/hepler_todo_filter';


const TodoListContainer = (props) => {

    let getPreparedTodoList = () => {
        let list = filterTodoList(props.todoList, props.filter);
        return searchByPattern(list, props.searchPattern);
    };

    return (
        <TodoList
            todoList={getPreparedTodoList()}
            onClickTaskDone={props.setTaskDone}
            onTaskDelete={props.deleteTask}
        />
    );
};

function mapStateToProps(state) {
    return {
        todoList: state.todo.list,
        filter: state.todo.filter,
        searchPattern: state.todo.searchPattern
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setTaskDone, deleteTask }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);

