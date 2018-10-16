import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';

import './index.css';
import App from './Containers/App';
import reducers from './redux/rootReducer';

import * as serviceWorker from './serviceWorker';

const logger = createLogger();
const middleware = [logger, thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
