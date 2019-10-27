import React from "react";
import { connect } from "react-redux";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { Button, Image } from "semantic-ui-react";

import { fetchLists, deleteList } from "../actions";
import ListCard from "../components/ListCard";
import "../styles/HomePage.scss";

class HomePage extends React.Component {
	componentDidMount() {
		if (!this.props.isUserSignedIn) this.props.history.push("/");
		const db = firebase.firestore();
		db.collection("users")
			.doc(this.props.user.uid)
			.get()
			.then(doc => {
				if (doc.data() === undefined) this.props.fetchLists([]);
				else this.props.fetchLists(doc.data().lists || []);
			});
	}
	newListRoute = () => {
		this.props.history.push("/new");
	};
	handleDelete = index => {
		return () => {
			this.props.deleteList(index);
			const db = firebase.firestore();
			db.collection("users")
				.doc(this.props.user.uid)
				.update({
					lists: [...this.props.lists].filter((_, id) => id !== index)
				});
		};
	};
	render() {
		return (
			<div id="HomePage">
				<Image rounded avatar src={this.props.user.photoURL} />
				<Button size="mini" circular icon="add" onClick={this.newListRoute} />
				<Button
					size="mini"
					circular
					icon="close"
					onClick={() => this.props.history.push("/")}
				/>
				<h1>All Lists</h1>
				<div className="list-view">
					{this.props.lists.map((item, index) => (
						<ListCard
							key={index}
							id={index}
							title={item.name}
							items={item.items}
							delete={this.handleDelete(index)}
							history={this.props.history}
						/>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		isUserSignedIn: state.isUserSignedIn,
		lists: state.allLists
	};
};

export default connect(
	mapStateToProps,
	{ fetchLists, deleteList }
)(HomePage);
