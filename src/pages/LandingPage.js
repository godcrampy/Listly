import React from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import { connect } from 'react-redux';

import { changeIsUserSignedIn, setUser } from '../actions'

class LandingPage extends React.Component {
  handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const db = firebase.firestore();
    provider.addScope('profile');
    firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      this.props.setUser(user);
      this.props.changeIsUserSignedIn(true);
      db.collection("users").doc(user.uid).set({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL
      })
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