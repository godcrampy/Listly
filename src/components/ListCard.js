import React from "react";
import { Card, List } from "semantic-ui-react";

const ListCard = props => {
	return (
		<Card>
			<Card.Content>
				<Card.Header>{props.title}</Card.Header>
				<List bulleted>
					{props.items.map((item, index) => (
						<List.Item key={index}>{item}</List.Item>
					))}
				</List>
			</Card.Content>
		</Card>
	);
};

export default ListCard;
