import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import "./styles/App.scss";

const App = () => {
	return (
		<div id="App">
			<Router>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/home" component={HomePage} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
