import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counters/Counter'
import TodoApp from './components/todo/TodoApp'
import './bootstrap.css'

function App() {
  return (
    <div className="App">
     {/* <Counter/> */}
     <TodoApp/>
    </div>
  );
}

export default App;
