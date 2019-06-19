import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService.js'


class ListTodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos : 
            [],
            messsage : null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }
    render() {
        return (
        <div>
            <h1>List Todos</h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            
                            <th>description</th>  
                            <th>Is Completed</th>
                            <th>Target Date</th> 
                            <th>Delete</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map( todo =>
                                <tr key={todo.id}>
                                   
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
        )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName();
        console.log(id + "," + username);
        TodoDataService.deleteTodo(username,id).then(response => {
            this.setState({message : `Delete of todo ${id} successful`});
            this.refreshTodos();
        }
        )
    }

    updateTodoClicked(id) {
        console.log("update" + id)
        this.props.history.push(`/todos/${id}`)
        // let username = AuthenticationService.getLoggedInUserName();
        // console.log(id + "," + username);
        // TodoDataService.deleteTodo(username,id).then(response => {
        //     this.setState({message : `Delete of todo ${id} successful`});
        //     this.refreshTodos();
        // }
        // )
    }


    componentDidMount() {
        this.refreshTodos()

    }
    refreshTodos() { 
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.returnAllTodos(username).then(response => {this.setState({todos : response.data})});
    }
}

export default ListTodoComponent;