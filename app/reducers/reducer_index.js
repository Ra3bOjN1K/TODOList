import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import todo from './reducer_todo';


const rootReducer = combineReducers({
    routing,
    todo
});

export default rootReducer;
