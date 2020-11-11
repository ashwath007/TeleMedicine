import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import Details from './Details';
import Dashboard from './Dashboard';
function Linking() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={App} />
				<Route exact path='/details' component={Details} />
				<Route exact path='/dashboard' component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
}

export default Linking;
