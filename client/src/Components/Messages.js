import React from 'react';
import socketIOclient from 'socket.io-client';
import Axios from 'axios';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.socket = null;
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        let token = JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'));
        const email = token[0].email
        Axios.get(`http://localhost:5000/messages/${email}`)
        .then(res => console.log(res.data))
        .catch(e => console.log(e));
    }


    render() {
        return(
            <div>
                <h1>Messages</h1>
            <div>Under construction</div>
            </div>
            
        )
    }    
}
export default Messages;


//let token = JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'));
// const email = token[0].email