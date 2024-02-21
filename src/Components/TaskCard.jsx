import React, { Component } from 'react'

export default class TaskCard extends Component {

  render() 
  {
  console.log(this.props)
    return (
      <div  className={this.props.task.isDone?"complete":"notYet"}>
        <h1>{this.props.task.action}</h1>
        <button onClick={()=>this.props.supp(this.props.task.id)} >Delete</button>
        <button onClick={()=>this.props.complete(this.props.task.id)} >{this.props.task.isDone?"Undo":"Complete"}</button>
        <hr />
      </div>
    )
  }
}
