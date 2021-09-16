import React, { Component } from "react";
import EditTodoForm from "./EditTodoForm";
import '../styles/ToDo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }

  handleDelete() {
    this.props.destroyerFunc(this.props.id);
  }

  handleEdit() {
    alert("hello")
  }

  showEdit() {
    var element = document.getElementsByClassName("ToDo-form");
    element[0].classList.toggle("mystyle");

  }

  render() {
    return (
      <div className="ToDo">
        <h2>{this.props.body}</h2>
        <button onClick={this.showEdit}>Show edit form</button>
        <button onClick={this.handleDelete}>X</button>
        <div className="ToDo-form">
          <form>
            <label htmlFor="editBody">Edit task </label>
            <input
              type="text"
              name="editBody" /*Name must be the same as state value the input is meant to update.*/
              value={this.props.body}
              id="editBody"
            />
            <button onClick>Submit</button>
          </form>
          <button onClick={this.showEdit}>Close</button>
        </div>
      </div>
    )
  }
}

export default Todo;