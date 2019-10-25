import React from "react";
import { connect } from "react-redux";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { Button } from "semantic-ui-react";

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
				this.props.fetchLists(doc.data().lists || []);
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
					lists: [...this.props.lists].filter((_, id) => id != index)
				});
		};
	};
	render() {
		return (
			<div id="HomePage">
				Home
				<Button circular icon="add" onClick={this.newListRoute} />
				<div className="list-view">
					{this.props.lists.map((item, index) => (
						<ListCard
							key={index}
							id={index}
							title={item.name}
							items={item.items}
							delete={this.handleDelete(index)}
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
