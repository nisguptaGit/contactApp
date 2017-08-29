import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './store';
import * as sagas from './sagas';



const initialState = {};
const store = configureStore(initialState);
sagas.default.map(store.runSaga)

ReactDOM.render(
	<Provider store={store}>
		<App />			
    </Provider>
	, document.getElementById('root'));
registerServiceWorker();
