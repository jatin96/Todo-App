import React, {Component} from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this)
    }

    render() {
        return (
            <div className="App">
            <CounterButton by={1} incrementMethod={this.increment} />
            <CounterButton by={5} incrementMethod={this.increment}/>
            <CounterButton by={10} incrementMethod={this.increment}/>
            <span className = "count">+{this.state.counter}</span>
          </div>
        )
    }

    increment(by) {

         console.log(`increment parent by : ${by}`)
        this.setState({
            counter : this.state.counter + by 
        })
       // this.state.counter++;
    }

}
class CounterButton extends Component {

    constructor() {
        super()
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this)
    }
    render() {
        return (
        <div className = "counter">
           <button onClick={this.increment}>+{this.props.by}</button>
        </div>
    )
    }
    increment() {
       // console.log('increment')
        // this.setState((prevState) =>
        //     {
        //         counter : prevState.counter + by
        //     }
        
        // );
        this.setState((prevState) => 
        {
            return {counter : prevState.counter + this.props.by}
        })
        this.props.incrementMethod(this.props.by);
    }
}
CounterButton.defaultProps = {
    by : 1
  }
//export default CounterButton
export default Counter