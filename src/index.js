// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Provider} from "react-redux"
import { createStore } from 'redux';
import itemReducer from './reducers/reducers'; 

const store = createStore(itemReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
   <BrowserRouter>
       <App />
    </BrowserRouter>
 </Provider>
   
);