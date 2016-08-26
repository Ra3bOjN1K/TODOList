import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app/container_app';
import TodoPage from './components/todo_page/component_todo_page';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={TodoPage}/>
    </Route>
);

