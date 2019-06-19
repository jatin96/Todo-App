import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            welcomeMessage :''
        }
        this.retrieveMessage = this.retrieveMessage.bind(this);
        this.welcomeMessageHandler = this.welcomeMessageHandler.bind(this)
        this.errorHandler = this.errorHandler.bind(this);
    }   
    render() {
        return (
            <>
            <div className="container">
                Welcome to my App . {this.props.match.params.name}. See Todo <Link to="/todo">Here</Link>
            </div>
            <div className="container"> <button className="btn btn-success" onClick={this.retrieveMessage}>Retrieve</button></div>
            <div className="container">{this.state.welcomeMessage}</div>
           </> 
        )
    }
    retrieveMessage() {
        console.log("message retrieved");
        HelloWorldService.executeHelloWorldBeanPathVariableService(this.props.match.params.name)
        .then(response => this.welcomeMessageHandler(response))
        .catch(error => this.errorHandler(error));
    }
    welcomeMessageHandler(response) {
        console.log(response)
        this.setState(
            {
                welcomeMessage : response.data.message
            }
        ) 
    }

    errorHandler(error) {
        console.log(error.response.data.message)
        this.setState(
            {
                welcomeMessage : error.response.data.message
            }
        ) 
    }
}
export default WelcomeComponent;