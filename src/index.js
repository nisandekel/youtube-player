import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const middlewares = applyMiddleware(thunk);

const initialState = {songList:[],songPlaying:{youtubeID:undefined,name:"",listOfQuotes:[], offset:0}};
const store = createStore(rootReducer, initialState, middlewares);

const appName = "Youtube Player";
ReactDOM.render(
    <Provider store={store}>
        <App name={appName}/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
