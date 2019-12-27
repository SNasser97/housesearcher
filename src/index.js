import React from 'react';
import ReactDOM from 'react-dom';
import "./sass/main.scss";
import * as serviceWorker from './serviceWorker';
import App from "./containers/App";


// export default => import Name from "./Name";
// export non-default => import { name } from "./name";
ReactDOM.render(<App/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
