import React from 'react';
import axios from "axios";

class Profile extends React.Component {
    constructor() {
        super();
        this.state={
            user:[],
            isLoaded:false
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/profile/:id')
        .then(res=> {
            console.log(res.data);
            this.setState(()=>({
                isLoaded:true,
                user: res.data
            }))
        })
        .catch(err => console.log(err))
    }

    render() {
        var {isLoaded,user} = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else{
            return(
                <div className="App">
                <ul>
                    {user.map(user =>(
                        <li key={user.email}>
                        <span>{user.password}<br/></span>
                        <span>{user.first_name}<br/></span>
                        <span>{user.last_name}<br/></span>
                        <span>{user.address}<br/></span>
                        <span>{user.google_location}<br/></span>
                        <span>{user.phone_number}<br/></span>
                        <span>{user.history}<br/></span>
                        <span>{user.transactions}</span>
                        </li>
                    ))}
                </ul>
                </div>
            )
        }
    };
};

export default Profile;


