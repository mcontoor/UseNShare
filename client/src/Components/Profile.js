import React from 'react';
import axios from "axios";
import { BrowserRouter, Route } from 'react-router-dom';

class Profile extends React.Component {
    constructor() {
        super();
        this.state={
            profile: []
            
        };
    }

    componentDidMount() {
        let token = JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'));
        const email = token[0].email
        axios.get(`http://localhost:5000/profile/${email}`)
        .then(res => {
            console.log(res.data);
            this.setState({
                profile: res.data
            })
        })
        
        .catch((e) => console.log(e));
    }

    render() {
        return(
            <BrowserRouter>
                <Route path=":/id" />
            </BrowserRouter>
            )
        }
    };

export default Profile;


