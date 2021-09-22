import React, { Component } from "react";
import '../styles/ToDo.css';
//import { Test } from "../HelperFunctions"

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      editBody: this.props.data.taskBody,
      editNotes: this.props.data.taskNotes
  };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    //this.done = this.done.bind(this);
  }

  handleDelete() {
    document.getElementById(this.props.id).classList.add("fade-animate");
    setTimeout(function () {
      this.props.destroyerFunc(this.props.id);
    }.bind(this), 500)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleEdit(event) {
    event.preventDefault();
    let editId = this.props.id;
    this.props.editFunc(this.state.editBody, this.state.editNotes, editId)
    //this.setState({ editBody: "",  editNotes: "" });
    this.toggleEdit()
  }

  handleToggle(){
  this.props.completeToggle(this.props.id)
  }

  toggleEdit() {
    let form = document.getElementsByClassName("ToDo-form-" + this.props.id);
    form[0].classList.toggle("show");
  }

  render() {
    const currentId = this.props.id;
    const completeOrNo = this.props.data.completed ? "completed" : ""
    return (
      <li className={"ToDo " + completeOrNo} id={currentId}>
        <h2 className={"Todo-body-" + currentId + " " + completeOrNo} onClick={this.handleToggle}>{this.props.data.taskBody}</h2>
        <p>{this.props.data.taskNotes}</p>
        <button onClick={this.handleToggle}>done</button>
        <button onClick={this.toggleEdit}>Show edit form</button>
        <button onClick={this.handleDelete}>X</button>
        <div className={"ToDo-form ToDo-form-" + currentId} >
          <form>
            <label htmlFor="editBody">Edit task </label>
            <input
              type="text"
              name="editBody" /*Name must be the same as state value the input is meant to update.*/
//              placeholder={this.props.body}
              id="editBody"
              className="ToDo-edit-input"
              value={this.state.editBody}
              onChange={this.handleChange}
            />
            <br />
            <textarea id="editNotes" value={this.state.editNotes} name="editNotes" onChange={this.handleChange} rows="4" cols="50" />
            <br />
            <button onClick={this.handleEdit}>Submit</button>
          </form>
          <button onClick={this.toggleEdit}>Close</button>
        </div>
      </li>
    )
  }
}

export default Todo;