import React from "react";
import { Card, List, Button, Modal, Header, Icon } from "semantic-ui-react";

class ListCard extends React.Component {
	state = { modalOpen: false };

	handleClose = () => this.setState({ modalOpen: false });
	handleOpen = () => this.setState({ modalOpen: true });
	render() {
		return (
			<Card>
				<Card.Content>
					<Card.Header>{this.props.title}</Card.Header>
					<List bulleted>
						{this.props.items.map((item, index) => (
							<List.Item key={index}>{item}</List.Item>
						))}
					</List>
					<Modal
						open={this.state.modalOpen}
						trigger={
							<Button
								floated="right"
								onClick={this.handleOpen}
								icon="trash"
								basic
								color="red"
							/>
						}
						basic
						size="small"
					>
						<Header icon="archive" content="Delete?" />
						<Modal.Content>
							<p>Are you sure you want to delete this list?</p>
						</Modal.Content>
						<Modal.Actions>
							<Button basic color="red" onClick={this.handleClose} inverted>
								<Icon name="remove" /> No
							</Button>
							<Button
								color="green"
								onClick={() => {
									this.props.delete();
									this.handleClose();
								}}
								inverted
							>
								<Icon name="checkmark" /> Yes
							</Button>
						</Modal.Actions>
					</Modal>
					<Button
						floated="right"
						icon="pencil"
						onClick={() => {
							this.props.history.push({
								pathname: "/edit",
								index: this.props.id,
								name: this.props.title,
								items: this.props.items
							});
						}}
						basic
						color="green"
					/>
				</Card.Content>
			</Card>
		);
	}
}

export default ListCard;
