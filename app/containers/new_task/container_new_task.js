import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NewTask from '../../components/new_task/component_new_task';
import { createNewTask } from '../../actions/actions_todo';


const NewTaskContainer = (props) => {
    return (
        <NewTask
            onCreateNewTask={props.createNewTask}
        />
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createNewTask }, dispatch)

}

export default connect(null, mapDispatchToProps)(NewTaskContainer);
