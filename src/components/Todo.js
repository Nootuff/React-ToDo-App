import React, { Component } from "react";
import '../styles/ToDo.css';
//import { Test } from "../HelperFunctions"

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editBody: this.props.data.taskBody,
      editNotes: this.props.data.taskNotes,
      editPriority: this.props.data.priority
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    //this.done = this.done.bind(this);
  }

  handleDelete() {
    document.getElementById(this.props.data.id).classList.add("fade-animate");
    setTimeout(function () {
      this.props.destroyerFunc(this.props.data.id);
    }.bind(this), 500)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleEdit(event) {
    event.preventDefault();
    let editId = this.props.data.id;
    this.props.editFunc(this.state, editId)
    //this.setState({ editBody: "",  editNotes: "" });
    this.toggleEdit()
  }

  handleToggle() {
    this.props.completeToggle(this.props.data.id)
  }

  toggleEdit() {
    let form = document.getElementsByClassName("ToDo-form-" + this.props.data.id);
    form[0].classList.toggle("show");
    this.setState({ editBody: this.props.data.taskBody, editNotes: this.props.data.taskNotes, editPriority: this.props.data.priority });
  }

  render() {
    const currentId = this.props.data.id;
    const completeOrNo = this.props.data.completed ? "completed" : ""
    const priorityLvl = this.props.data.priority;
    const priorityColor = priorityLvl == "High" ? "High" : priorityLvl == "Medium" ? "Medium" : "Low";

    return (
      <li className={"ToDo " + completeOrNo + " " + priorityColor} id={currentId}>
        <h2 className={"Todo-body-" + currentId + " " + completeOrNo} onClick={this.handleToggle}>{this.props.data.taskBody}</h2>
        <p>{this.props.data.taskNotes}</p>
        <p>{this.props.data.priority}</p>
        <button onClick={this.handleToggle}>done</button>
        <button onClick={this.toggleEdit}>Show edit form</button>
        <button onClick={this.handleDelete}>X</button>
        <div className={"ToDo-form ToDo-form-" + currentId} >
          <form onSubmit={this.handleEdit}>
            <label htmlFor="editBody">Edit task </label>
            <input
              type="text"
              name="editBody" /*Name must be the same as state value the input is meant to update.*/
              //placeholder={this.props.body}
              id="editBody"
              className="ToDo-edit-input"
              value={this.state.editBody}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="priority">Choose priority </label>
            <select
              name="editPriority"
              className="TodoForm-select"
              //defaultValue={"Medium"}
              value={this.state.editPriority}
              onChange={this.handleChange}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <br />
            <textarea
              id="editNotes"
              value={this.state.editNotes}
              name="editNotes"
              onChange={this.handleChange}
              rows="4" cols="50"
            />
            <br />
            {this.state.editBody && <button>Update</button>}
          </form>
          <button onClick={this.toggleEdit}>Close</button>
        </div>
      </li>
    )
  }
}

export default Todo;