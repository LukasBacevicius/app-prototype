
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import history from './history';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import reducers from './reducers';
import rootSaga from './sagas';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = (state: any, action: any) => combineReducers({
    ...reducers,
    router: connectRouter(history),
})(state, action);

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
