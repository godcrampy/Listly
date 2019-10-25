import React from "react";
import { Icon } from "semantic-ui-react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { connect } from "react-redux";
import Typical from "react-typical";

import { changeIsUserSignedIn, setUser } from "../actions";
import AuthButtons from "../components/AuthButton";
import "../styles/LandingPage.scss";

class LandingPage extends React.Component {
	handleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		const db = firebase.firestore();
		provider.addScope("profile");
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				// var token = result.credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				this.props.setUser(user);
				this.props.changeIsUserSignedIn(true);
				db.collection("users")
					.doc(user.uid)
					.set({
						name: user.displayName,
						email: user.email,
						photoURL: user.photoURL
					});
				// ...
			});
	};
	render() {
		return (
			<div id="LandingPage">
				<h1>
					<Icon name="list ul" />
					Listly
				</h1>
				<div id="center">
					<p className="subtitle">All your lists in one place.</p>
					<Typical steps={list} loop={Infinity} wrapper="p" />
					<div className="buttons">
						<AuthButtons handleSignIn={this.handleSignIn} />
					</div>
				</div>
			</div>
		);
	}
}

const list = [
	"Todo List",
	1000,
	"Medicines",
	1000,
	"Bucket List",
	1000,
	"Hangout Spots",
	1000,
	"Shopping List",
	1000,
	"Chores",
	1000,
	"Books to Read",
	1000,
	"Playlist?",
	1000
];

const mapStateToProps = state => {
	return {
		user: state.user,
		isUserSignedIn: state.isUserSignedIn
	};
};

export default connect(
	mapStateToProps,
	{ changeIsUserSignedIn, setUser }
)(LandingPage);
