import React, { Component, PropTypes } from 'react';
import NewTaskContainer from '../../containers/new_task/container_new_task';
import TodoFiltersBlockContainer from '../../containers/filter_todo_block/container_filter_todo_block';
import TodoListContainer from '../../containers/todo_list/container_todo_list';

import './style.scss';


export default () => {
    return (
        <div className="todo-page-container">
            <NewTaskContainer />
            <TodoFiltersBlockContainer />
            <TodoListContainer />
        </div>
    );
};

