import React from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from "firebase/app";
import "firebase/auth";

class LandingPage extends React.Component {
  handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
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

export default LandingPage;