import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Stateful from './presentational/stateful';
import ConnectedStateful from './container/connectedStateful.jsx';
import PreConnectedStateful from './container/preConnectedStateful.jsx';


import store from './redux/store';
import ACTION_TYPES from './redux/actionTypes';




const App = () => (
	<div>
		<ConnectedStateful/>
		<PreConnectedStateful/>
	</div>
);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
, document.getElementById("root"));






