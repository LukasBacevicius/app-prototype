import React from 'react';
import { render } from 'react-dom';
//@ts-ignore
import { Provider } from 'react-redux';
//@ts-ignore
import { Route } from 'react-router';
//@ts-ignore
import { ConnectedRouter } from 'connected-react-router'
import history from './history';
import store from './store';
import App from './App';

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);