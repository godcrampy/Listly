import React from "react";
import { connect } from "react-redux";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { Button } from "semantic-ui-react";

import { fetchLists } from "../actions";

class HomePage extends React.Component {
	componentDidMount() {
		if (!this.props.isUserSignedIn) this.props.history.push("/");
		const db = firebase.firestore();
		db.collection("users")
			.doc(this.props.user.uid)
			.get()
			.then(doc => {
				console.log(doc.data());
				this.props.fetchLists(doc.data().lists || []);
				console.log(doc.data());
			});
	}
	newListRoute = () => {
		this.props.history.push("/new");
	};
	render() {
		return (
			<div>
				Home
				<Button circular icon="add" onClick={this.newListRoute} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		isUserSignedIn: state.isUserSignedIn
	};
};

export default connect(
	mapStateToProps,
	{ fetchLists }
)(HomePage);
