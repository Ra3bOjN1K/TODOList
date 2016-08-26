import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import persistState from 'redux-localstorage';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/reducer_index';

const logger = createLogger({
    level: 'info',
    collapsed: true
});

const router = routerMiddleware(hashHistory);

const enhancer = compose(
    applyMiddleware(thunk, router, logger),
    window.devToolsExtension ? window.devToolsExtension() : noop => noop,
    persistState('todo')
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers/reducer_index', () =>
            store.replaceReducer(require('../reducers/reducer_index')) // eslint-disable-line global-require
        );
    }

    return store;
}
