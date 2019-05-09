import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Axios from 'axios';
import { Button } from 'antd';

firebase.initializeApp({
apiKey:"AIzaSyAQoZiSojolRu7Xv-9s5ZoLEFJG-5XYL5o",
authDomain: "usenshare.firebaseapp.com"
})


class Signin extends Component {
    state = {
        isSignedIn: false,
    }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult : (authResult, redirectUrl) => {
            redirectUrl = () => {
                return true};
            var user = authResult.user;
            var credential = authResult.credential;
            var isNewUser = authResult.additionalUserInfo.isNewUser;
            var providerId = authResult.additionalUserInfo.providerId;
            var operationType = authResult.operationType;
            Axios.post('http://localhost:5000/signin', {
                data:  {
                    user: user,
                    credential: credential,
                    isNewUser: isNewUser,
                    providerId: providerId,
                    operationType: operationType
                }

            } )
            .catch((e) => console.log(e));

            
        },
        signInSuccessUrl: "/"
    }
}




    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                isSignedIn: !!user,
            })
            console.log('user', user.providerData[0])
            

        })


        
    }

    render () {
        return(
            <div className="signin">
            {this.state.isSignedIn ? (
                <span>
                    <div>Signed in</div>
                    <Button onClick={()=>firebase.auth().signOut()}> signout</Button>
                    <p>Welcome {firebase.auth().currentUser.displayName}</p> 
                    <img alt="profilepic" src={firebase.auth().currentUser.photoURL}></img>
                </span>
                )
            : (
                <StyledFirebaseAuth button 
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
                />
            )
            }
            </div>
        )
    }
}

export default Signin;

