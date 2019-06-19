import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : "jatin narula",
            password : "",
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        // this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.ChangeHandler = this.ChangeHandler.bind(this);
        this.loginAuth = this.loginAuth.bind(this);
    }
    ChangeHandler(event) {
        this.setState({[event.target.name]:event.target.value})
        //  console.log(this.state)
    } 
    // passwordChangeHandler(event) {
    //     console.log("password handler called")
    //     this.setState({password:event.target.value})
    // } 
    loginAuth() {
        console.log(this.state.username)
        if(this.state.username === 'jatin' && this.state.password === 'narula') {
            console.log("login successful")
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage : true})
            // this.setState({hasLoginFailed : false})

        }
        else {
            console.log("login failed")
            this.setState({showSuccessMessage : false})
            this.setState({hasLoginFailed : true})
        }
    }
   
    render() {
        return (
            <div>
                <h1> Login </h1>
                <div className="container">
                    <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} className="alert alert-warning"/>
                    <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />
                    User Name : <input type="text" name="username" value={this.state.username} onChange={this.ChangeHandler}></input>
                    Password : <input type="password" name="password" value={this.state.password} onChange={this.ChangeHandler}></input>
                    <button className="btn btn-success" onClick={this.loginAuth}>Login</button>
                </div>
               
            </div>
            );
    }  
}

function ShowInvalidCredentials(props) {
    if(props.hasLoginFailed) {
        return <div>Invalid credentials</div>
    }
    return null
}

function ShowLoginSuccessMessage(props) {
    if(props.showSuccessMessage) {
        return <div>Login Successful</div>
    }
    return null
}

export default LoginComponent;