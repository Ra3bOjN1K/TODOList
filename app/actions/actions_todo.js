import {
    TODO_CREATE_NEW_TASK,
    TODO_DELETE_TASK,
    TODO_ON_CLICK_TASK_DONE,
    TODO_SET_FILTER,
    TODO_SET_SEARCH_PATTERN
} from '../constants/todo_const';


export const createNewTask = (taskTitle) => {
    return {
        type: TODO_CREATE_NEW_TASK,
        payload: {
            id: (new Date()).getTime(),
            title: taskTitle,
            isDone: false
        }
    }
};

export const deleteTask = (task) => {
    return {
        type: TODO_DELETE_TASK,
        payload: {
            task: task
        }
    }
};

export const setTaskDone = (taskId, isDone) => {
    return {
        type: TODO_ON_CLICK_TASK_DONE,
        payload: {
            taskId: taskId,
            isDone: isDone
        }
    }
};

export const setFilterTodoList = (filter) => {
    return {
        type: TODO_SET_FILTER,
        payload: {
            filter
        }
    }
};

export const setSearchPattern = (pattern) => {
    return {
        type: TODO_SET_SEARCH_PATTERN,
        payload: {
            searchPattern: pattern
        }
    }
};
