import React, { Component } from "react";
import '../styles/ToDo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { taskEdit: ""};
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }

  handleDelete() {
    this.props.destroyerFunc(this.props.id);
  }

  handleEdit(event) {
    event.preventDefault(); 
   console.log("submitted")
  }

  showEdit() {
    document.getElementById(this.props.id).classList.toggle("mystyle");
  }

  render() {
    return (
      <div className="ToDo">
        <h2>{this.props.body}</h2>
        <button onClick={this.showEdit}>Show edit form</button>
        <button onClick={this.handleDelete}>X</button>
        <div className="ToDo-form" id={this.props.id}>
          <form>
            <label htmlFor="editBody">Edit task </label>
            <input
              type="text"
              name="editBody" /*Name must be the same as state value the input is meant to update.*/
              placeholder={this.props.body}
              id="editBody"
              className="ToDo-edit-input"
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