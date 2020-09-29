import React from 'react';
import ReactDOM from 'react-dom';
import "./sass/main.scss";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from "redux-thunk";
import * as serviceWorker from './serviceWorker';
import { searchHomes, getHomes } from './redux/reducers';
import App from "./containers/App";

// output actions and payload of state props
const logger = createLogger();
// combine reducers into 1 root
const rootReducer = combineReducers({searchHomes, getHomes});
// redux store, passed to container/app
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare, logger));

// export default => import Name from "./Name";
// export non-default => import { name } from "./name";
ReactDOM.render(
	<Provider store={ store }>
		<App/> 
	</Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
