import React, { Component, PropTypes } from 'react';
import {
    FILTER_TASKS_ALL,
    FILTER_TASKS_ACTIVE,
    FILTER_TASKS_DONE
} from '../../helpers/hepler_todo_filter';

import './style.scss';


class TodoFiltersBlock extends Component {

    _clickSearchBtn() {
        this.props.changeSearchPattern(this.refs.todoSearchString.value);
    }

    _setRadioChecked(value) {
        return this.props.filter === value ? " checked" : "";
    }

    render() {
        return (
            <div className="filter-todo-block">
                <div className="filter-todo-custom-search">
                    <input
                        type="text"
                        ref="todoSearchString"
                    />
                    <a onClick={::this._clickSearchBtn}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="filters-todo">
                    <div
                        className={`filter-btn${this._setRadioChecked(FILTER_TASKS_ALL)}`}
                        onClick={this.props.changeFilter.bind(this, FILTER_TASKS_ALL)}>

                        <i className="fa fa-list-alt" aria-hidden="true"></i>
                    </div>
                    <div
                        className={`filter-btn${this._setRadioChecked(FILTER_TASKS_ACTIVE)}`}
                        onClick={this.props.changeFilter.bind(this, FILTER_TASKS_ACTIVE)}>

                        <i className="fa fa-square-o" aria-hidden="true"></i>
                    </div>
                    <div
                        className={`filter-btn${this._setRadioChecked(FILTER_TASKS_DONE)}`}
                        onClick={this.props.changeFilter.bind(this, FILTER_TASKS_DONE)}>

                        <i className="fa fa-check-square-o" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
}

TodoFiltersBlock.propTypes = {
    filter: PropTypes.string.isRequired,
    searchPattern: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
    changeSearchPattern: PropTypes.func.isRequired
};

export default TodoFiltersBlock;
