
import './App.css';

import React, { Component } from 'react'
import TaskList from './Components/TaskList';
import AddNewTask from './Components/AddNewTask';

export default class App extends Component {
  state={
    todos:[
      {id:Math.random(),action:"Wake Up",isDone:true},
      {id:Math.random(),action:"Go Out",isDone:false},
      {id:Math.random(),action:"do Home Work",isDone:false},


    ]
  }
  //delete function

  handleDelete=(aliya)=>this.setState({todos:this.state.todos.filter(el=>el.id!==aliya)});
  //complete
  handleComplete=(ID)=>this.setState({todos:this.state.todos.map(el=>el.id===ID?{...el,isDone:!el.isDone}:el)});
  // add new task
  handleAdd=newTask=>this.setState({todos:[...this.state.todos,newTask]})
  render() {
    return (
      <div className='App'>
        <AddNewTask  add={this.handleAdd}/>
        <TaskList list={this.state.todos} deleteFuntion={this.handleDelete}  completeFunction={this.handleComplete}/>
      </div>
    )
  }
}
