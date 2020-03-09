import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import AdsList from './components/AdsList';
import NewAd from './components/NewAd';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={AdsList} />
				<Route path="/NewAd" component={NewAd} />
			</Switch>
		</Router>
	);
}

export default App;
