import React from "react";
import { Button, Icon } from "semantic-ui-react";

const AuthButton = props => {
	return (
		<Button.Group className="buttons">
			<Button color="google plus" onClick={props.handleSignUp}>
				<Icon name="google" />
				Join
			</Button>
			<Button.Or />
			<Button basic color="red" onClick={props.handleSignIn}>
				<Icon name="google" />
				Sign In
			</Button>
		</Button.Group>
	);
};

export default AuthButton;
