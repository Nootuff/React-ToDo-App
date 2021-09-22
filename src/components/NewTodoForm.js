import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'; //Imports the uuid npm package. 

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskBody: "",
      taskNotes: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(event.value)
    console.log(event.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newToDo = { ...this.state, id: uuidv4(), completed: false }
    this.props.creatorFunc(newToDo);
    this.setState({ taskBody: "", taskNotes: "" }); //Clears the form by setting state back to its defaults. 
  }

  render() {


    return (
      <form onSubmit={this.handleSubmit} className="">
        <h2>Enter New ToDo</h2>

        <label htmlFor="taskBody">Task </label>
        <input
          type="text"
          placeholder="New todo"
          name="taskBody" /*Name must be the same as state value the input is meant to update.*/
          value={this.state.taskBody}
          id="taskBody"
          onChange={this.handleChange}
        />
        <br />
        <textarea id="taskNotes" value={this.state.taskNotes} name="taskNotes" onChange={this.handleChange} rows="4" cols="50" />
        <br />
       
       {this.state.taskBody && <button>I need to do this</button>} {/*This is how to you write a ternay operator with only one condition in react */}
        {/*{(this.state.taskBody) ? <button>I need to do this</button>}*/}
      </form>
    )
  }
}

export default NewTodoForm;