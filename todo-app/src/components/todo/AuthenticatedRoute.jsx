import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService';
class AuthenticatedRoute extends Component {
    render() {
        if(AuthenticationService.isLoggedIn()) {
            return <Route {...this.props} />
        }
        else {
            return <Redirect to="/login"></Redirect>
        }
    }

}

export default AuthenticatedRoute;