import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Axios from 'axios';
import keys from '../../config/keys';

firebase.initializeApp({
    apiKey: keys.firebase.apikey,
    authDomain: keys.firebase.authdomain
})


class Signin extends Component {
    state = {
        isSignedIn: false
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
                console.log('hgfhgjh')
                return true};
            var user = authResult.user;
            var credential = authResult.credential;
            var isNewUser = authResult.additionalUserInfo.isNewUser;
            var providerId = authResult.additionalUserInfo.providerId;
            var operationType = authResult.operationType;
            var userValue = JSON.parse(user);
            console.log('jlkhlj;f');
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
            });
            // console.log('user', user.providerData[0]);
            


        });
        
    }

    render () {
        return(
            <div className="signin">
            {this.state.isSignedIn ? (
                <span>
                    <div>Signed in</div>
                    <button onClick={()=> {
                        firebase.auth().signOut()
                        localStorage.removeItem('firebaseui::rememberedAccounts')
                    }
                        }> signout</button>
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

