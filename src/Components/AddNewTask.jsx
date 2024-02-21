import React, { Component } from 'react'

export default class AddNewTask extends Component {
    state={
        newAction:"hello"
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const item={
            id:Math.random(),action:this.state.newAction,isDone:false
        }
        this.props.add(item)
        this.setState({newAction:""})
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
            <input type="text" value={this.state.newAction}
            onChange={e=>this.setState({newAction:e.target.value})}/>
            <button type='submit' >Add</button>
        </form>
      </div>
    )
  }
}
