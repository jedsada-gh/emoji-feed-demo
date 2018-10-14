import React, { Component } from 'react'
import '../App.css'
import { auth, provider } from '../firebase'

class Login extends Component {

    state = {
        user: null
    }

    componentWillMount() {
        auth.onAuthStateChanged((user) => {
            this.setState({ user })
        })
    }
    
    loginFacebook = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            this.setState({ user })
            this.props.history.replace("/feed")
        })
    }
    
    logoutFacebook = () => {
        auth.signOut().then(() => {
            this.setState({ user: null }) 
        })
    }

    render() {
        const { user } = this.state
        return ( 
            <div className="App">
                <p>{user ? `Hi, ${user.displayName}!` : 'Hi!'}</p>
                <button class="ui facebook button" onClick={this.loginFacebook}>
                    <i class="facebook icon"></i>
                    Sign up with Facebook
                </button>
            </div>
        )
    }
}

export default Login