import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import Details from './Details';
import Dashboard from './Dashboard';
import Doctors from './Doctors';
import Application_Form from './Application_Form';
function Linking() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={App} />
				<Route exact path='/details' component={Details} />
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/doctors' component={Doctors} />
				<Route
					exact
					path='/application'
					component={Application_Form}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default Linking;
