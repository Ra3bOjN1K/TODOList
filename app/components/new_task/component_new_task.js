import React, { Component, PropTypes } from 'react';

import './style.scss';


class NewTask extends Component {

    _clickCreateTask() {
        let taskTitle = this.refs.newTaskRef.value.trim();
        if (!!taskTitle) {
            this.props.onCreateNewTask(taskTitle);
            this.refs.newTaskRef.value = '';
        }
    }

    render() {
        return (
            <div className="new-task-wrapper">
                <input type="text" className="new-task-input" ref="newTaskRef"/>
                <button
                    className="create-task-btn"
                    onClick={this._clickCreateTask.bind(this)}>Создать
                </button>
            </div>
        );
    }
}

NewTask.propTypes = {
    onCreateNewTask: PropTypes.func.isRequired
};

export default NewTask;
