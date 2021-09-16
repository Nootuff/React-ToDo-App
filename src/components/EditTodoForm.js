import React, { Component } from "react";

class EditTodoForm  extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.destroyerFunc(this.props.id); 
  }

  render() {
    return (
        <div>
      <form className="">
        <div>
          <label htmlFor="taskBody">Edit task </label>
          <input
          />
        </div>
        <button onClick>Submit</button>
      </form>

      <button>Close</button>
      </div>
    )
  }
}

export default EditTodoForm;