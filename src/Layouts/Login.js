import React, { Component } from 'react'
import '../App.css'
import { auth, provider } from '../firebaseApp'
import { FacebookLoginButton } from "react-social-login-buttons";

class Login extends Component {

    componentWillMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.props.history.replace("/feed")
            }
            this.setState({ user })
        })
    }

    state = {
        user: null
    }
    
    login = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            this.setState({ user })
        })
    }
    
    logout = () => {
        auth.signOut().then(() => {
            this.setState({ user: null }) 
        })
    }

    render() {
        const { user } = this.state
        return ( 
            <div className="App">
                <p>{user ? `Hi, ${user.displayName}!` : 'Hi!'}</p>
                <FacebookLoginButton onClick={this.login} />
            </div>
        )
    }
}

export default Login