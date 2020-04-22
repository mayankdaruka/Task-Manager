import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import taskReducer from './Store/Reducers/task_reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(taskReducer);

ReactDOM.render(<Provider store = {store}>
                <App /> 
                </Provider>, document.getElementById('root'));

