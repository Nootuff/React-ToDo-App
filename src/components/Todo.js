import React, { Component } from "react";
import '../styles/ToDo.css';
//import { handleChange } from "../helpers"

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { editBody: "" };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.done = this.done.bind(this);
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
    this.props.editFunc(this.state.editBody, editId)
    this.setState({ editBody: "" });
    this.showEdit()
  }

  done() {
    let body = document.getElementsByClassName("Todo-body-" + this.props.id);
    body[0].classList.toggle("done");
  }

  showEdit() {
    //document.getElementById(this.props.id).classList.toggle("show");
    let form = document.getElementsByClassName("ToDo-form-" + this.props.id);
    form[0].classList.toggle("show");
  }

  render() {
    const currentId = this.props.id;
    return (
      <div className="ToDo" id={currentId}>
        <h2 className={"Todo-body-" + currentId} onClick={this.done}>{this.props.body}</h2>
        <button onClick={this.done}>done</button>
        <button onClick={this.showEdit}>Show edit form</button>
        <button onClick={this.handleDelete}>X</button>
        <div className={"ToDo-form ToDo-form-" + currentId} >
          <form>
            <label htmlFor="editBody">Edit task </label>
            <input
              type="text"
              name="editBody" /*Name must be the same as state value the input is meant to update.*/
              placeholder={this.props.body}
              id="editBody"
              className="ToDo-edit-input"
              value={this.state.editBody}
              onChange={this.handleChange}
            />
            <button onClick={this.handleEdit}>Submit</button>
          </form>
          <button onClick={this.showEdit}>Close</button>
        </div>
      </div>
    )
  }
}

export default Todo;