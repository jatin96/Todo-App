import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'

import LoginComponent from './LoginComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ListTodoComponent from './ListTodoComponent.jsx'
import TodoComponent from './TodoComponent'

class TodoApp extends Component {
   
    
    render() {
        return (
            <div className="TodoApp" >
                
                    <Router>
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path = "/" exact component = {LoginComponent} />
                            <Route path = "/login" component = {LoginComponent} />
                            <AuthenticatedRoute path = "/todos/:id" component = {TodoComponent} />
                            <AuthenticatedRoute path = "/todo" component = {ListTodoComponent} />
                            <AuthenticatedRoute path = "/welcome/:name" component = {WelcomeComponent} />
                            <AuthenticatedRoute path = "/logout" component = {LogoutComponent} />
                            <Route component = {ErrorComponent} />
                        </Switch>
                        <FooterComponent></FooterComponent>
                       
                    </Router>  
              
               
             {/* <LoginComponent></LoginComponent>
                <WelcomeComponent></WelcomeComponent>*/}
            </div>
        )
    }
}

export default TodoApp;