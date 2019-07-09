import ReactDOM from 'react-dom';
import React from 'react';
import Main from './components/Main.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store.js';

const appEl = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Main />
		</Router>
	</Provider>,
	appEl,
	() => {
		console.log('DOM rendered.');
	}
);
