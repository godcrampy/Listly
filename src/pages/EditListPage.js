import React from "react";
import { Form, Input, TextArea, Button, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import * as firebase from "firebase/app";
import "firebase/firestore";

import { createList } from "../actions";
import "../styles/NewListPage.scss";

class EditListPage extends React.Component {
	state = {
		index: this.props.location.index,
		name: this.props.location.name,
		items: this.props.location.items,
		error: false
	};
	handleListNameChange = event => {
		this.setState({ name: event.target.value });
	};
	handleItemChange = event => {
		this.setState({ items: event.target.value.split("\n") });
	};
	saveList = () => {
		if (this.state.name === "") this.setState({ error: true });
		else {
			let final = [...this.props.allLists];
			final[this.state.index] = {
				name: this.state.name,
				items: this.state.items
			};
			const db = firebase.firestore();
			db.collection("users")
				.doc(this.props.user.uid)
				.update({
					lists: final
				});
			this.props.history.push("/home");
		}
	};
	render() {
		return (
			<div id="NewListPage">
				<Form className="form" onSubmit={this.saveList}>
					<h1>New List</h1>
					<Input
						placeholder="List Name"
						value={this.state.name}
						onChange={this.handleListNameChange}
					/>
					<TextArea
						rows="10"
						placeholder="List Items"
						className="textarea"
						value={this.state.items.reduce((acc, val) => (acc += `\n${val}`))}
						onChange={this.handleItemChange}
					/>
					<br />
					<div className="btn-grp">
						<Button.Group compact>
							<Button onClick={() => this.props.history.push("/home")}>
								Cancel
							</Button>
							<Button.Or />
							<Button positive type="submit">
								Save List
							</Button>
						</Button.Group>
					</div>
					<Message negative hidden={!this.state.error}>
						<Message.Header>Oops!</Message.Header>
						<p>List Names cannot be empty</p>
					</Message>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		allLists: state.allLists
	};
};

export default connect(
	mapStateToProps,
	{ createList }
)(EditListPage);
