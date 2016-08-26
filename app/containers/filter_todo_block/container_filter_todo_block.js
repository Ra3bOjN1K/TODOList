import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoFiltersBlock from '../../components/filter_todo_block/component_todo_filters_block';
import { setFilterTodoList, setSearchPattern } from '../../actions/actions_todo';


const TodoFiltersBlockContainer = (props) => {
    return (
        <TodoFiltersBlock
            filter={props.filter}
            searchPattern={props.searchPattern}
            changeFilter={props.setFilterTodoList}
            changeSearchPattern={props.setSearchPattern}
        />
    );
};

function mapStateToProps(state) {
    return {
        filter: state.todo.filter,
        searchPattern: state.todo.searchPattern
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setFilterTodoList, setSearchPattern }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFiltersBlockContainer);
