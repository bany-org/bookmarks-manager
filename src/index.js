import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import App from './App/App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import { watchAuth, watchContent } from './App/store/sagas';

import authReducer from './App/store/reducers/auth';
import masterMind from './App/store/reducers/reducer';
import bookmarks from './App/store/reducers/content';
import adventure from './Modules/Adventure/store/reducers';

const composeEnchancer =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    master: masterMind,
    bookmarks: bookmarks,
    adventure: adventure,
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, 
    composeEnchancer(applyMiddleware(sagaMiddleware))
    );
    
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchContent);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
