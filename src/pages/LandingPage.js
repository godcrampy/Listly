import React from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { connect } from 'react-redux';

import { changeIsUserSignedIn, setUser } from '../actions'

class LandingPage extends React.Component {
  handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      this.props.setUser(user);
      this.props.changeIsUserSignedIn(true);
      console.log(this.props.user);
      // ...
    })
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleSignIn}>
          Sign In
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isUserSignedIn: state.isUserSignedIn
  }
}

export default connect(mapStateToProps, { changeIsUserSignedIn, setUser })(LandingPage);