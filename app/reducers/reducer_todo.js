import {
    TODO_CREATE_NEW_TASK,
    TODO_DELETE_TASK,
    TODO_ON_CLICK_TASK_DONE,
    TODO_SET_FILTER,
    TODO_SET_SEARCH_PATTERN,
} from '../constants/todo_const';

import { FILTER_TASKS_ALL } from '../helpers/hepler_todo_filter';


let initialState = {
    list: [],
    filter: FILTER_TASKS_ALL,
    searchPattern: ''
};


export default function (state = initialState, action) {
    switch (action.type) {

        case TODO_CREATE_NEW_TASK:
            var tasks = state.list.slice();
            tasks.unshift(action.payload);

            return {
                ...state,
                list: tasks
            };

        case TODO_DELETE_TASK:
            tasks = state.list.slice();

            return {
                ...state,
                list: tasks.reduce((arr, item) => {
                    if (item.id !== action.payload.task.id) {
                        arr.push(item);
                    }
                    return arr;
                }, [])
            };

        case TODO_ON_CLICK_TASK_DONE:
            tasks = state.list.slice();

            for (let i = 0; i < tasks.length; i++) {
                let task = tasks[i];
                if (task.id === action.payload.taskId) {
                    task.isDone = action.payload.isDone;
                    break;
                }
            }
            return {
                ...state,
                list: tasks
            };

        case TODO_SET_FILTER:
            return {
                ...state,
                filter: action.payload.filter
            };

        case TODO_SET_SEARCH_PATTERN:
            return {
                ...state,
                searchPattern: action.payload.searchPattern
            };

        default:
            return state;
    }
}
