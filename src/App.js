import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import NewListPage from "./pages/NewListPage";
import "./styles/App.scss";

const App = () => {
	return (
		<div id="App">
			<Router>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/home" component={HomePage} />
					<Route path="/new" component={NewListPage} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
