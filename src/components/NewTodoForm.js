import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'; //Imports the uuid npm package. 
import { showToggler } from "../HelperFunctions"

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskBody: "",
      taskNotes: "",
      completed: false,
      priority: "Medium"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleToggle() {
    let form = document.getElementsByClassName("ToDo-form");
    //showToggler(this.props.data.id)
    form[0].classList.toggle("show");
    //this.setState({ editBody: this.props.data.taskBody, editNotes: this.props.data.taskNotes, editPriority: this.props.data.priority });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newToDo = { ...this.state, id: uuidv4() }
    this.props.creatorFunc(newToDo);
    this.setState({ taskBody: "", taskNotes: "", priority: "Medium" }); //Clears the form by setting state back to its defaults. 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="">
        <h2>Enter New ToDo</h2>
        <label htmlFor="taskBody">Task </label>
        <input
          type="text"
          id="taskBody"
          name="taskBody" /*Name must be the same as state value the input is meant to update.*/
          value={this.state.taskBody}
          placeholder="New todo"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="priority">Choose priority </label>
        <select
          name="priority"
          className="TodoForm-select"
          //defaultValue={"Medium"}
          value={this.state.priority}
          onChange={this.handleChange}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <p className="showHide" onClick={this.handleToggle}>Notes</p>
        <div className="ToDo-form">
          <textarea
            id="taskNotes"
            name="taskNotes"
            value={this.state.taskNotes}
            onChange={this.handleChange}
            rows="4" cols="50"
          />
        </div>
        <br />

        {this.state.taskBody && <button onClick={this.handleSubmit} >I need to do this</button>} {/*This is how to you write a ternay operator with only one condition in react */}
        {/*{(this.state.taskBody) ? <button>I need to do this</button>}*/}
      </form>
    )
  }
}

export default NewTodoForm;