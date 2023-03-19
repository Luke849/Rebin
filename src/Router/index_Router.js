import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Profile from '../Components/Profile';
import Shop from '../Components/Shop';
import Leaderboard from '../Components/Leaderboard';
import Main from '../Components/Main';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/profile"><Profile /></Route>
				<Route exact path="/shop"><Shop /></Route>
				<Route exact path="/leaderboard"><Leaderboard /></Route>
				<Route exact path="/main"><Main /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;