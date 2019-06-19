import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand">Todo Application</a></div>
                    <ul className="navbar-nav">
                        {<li><Link className="nav-link" to="/todo">Home</Link></li>}
                        {<li><Link className="nav-link" to="/todo">Todo</Link></li>}    
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                         {<li><Link className="nav-link" to="/login">Login</Link></li>}
                       {<li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>   
                </nav>
            </header>
        )
    }
}

export default HeaderComponent;