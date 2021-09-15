import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'; //Imports the uuid npm package. 

class NewTodoForm  extends Component {
  constructor(props) {
    super(props);
    this.state = { taskBody: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { 
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault(); 
    const newToDo = {...this.state, id: uuidv4()}
    this.props.creatorFunc(newToDo);
    this.setState({taskBody: ""}); //Clears the form by setting state back to its defaults. 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="">
        <h2>Enter New ToDo</h2>
        <div>
          <label htmlFor="taskBody">Task </label>
          <input
            type="text"
            name="taskBody" /*Name must be the same as state value the input is meant to update.*/
            value={this.state.taskBody} 
            id="taskBody"
            onChange={this.handleChange}
          />
        </div>
        <button>I need to do this</button>
      </form>
    )
  }
}

export default NewTodoForm;