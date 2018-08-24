import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/home/App';
import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';
import { store } from './redux';

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
