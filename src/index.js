import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store.js'
import './index.css';
import App from './App';

ReactDOM.render(
    <Provider>
        <BrowserRouter store={store}> 
            <App />
        </BrowserRouter>
    </Provider>,
 document.getElementById('root'));

