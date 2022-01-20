import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './style/style.css'
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {BrowserRouter} from 'react-router-dom'
import {rootReducer} from "./store/reducers";
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);