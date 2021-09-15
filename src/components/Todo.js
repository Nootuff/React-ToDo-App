import React, { Component } from "react";

class Todo  extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.destroyerFunc(this.props.id); 
  }

  render() {
    return (
      <div className="">
        <p>{this.props.body}</p>
        <button onClick={this.handleDelete}>X</button>
      </div>
    )
  }
}

export default Todo;