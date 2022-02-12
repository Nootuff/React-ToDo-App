import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Todo(props) {
  const [open, setOpen] = useState(false);

  let values = {
    taskBody: props.todos.taskBody,
    taskNotes: props.todos.taskNotes,
    completed: props.todos.completed,
    priority: props.todos.priority,
    id: props.todos.id
  }

  const [state, setState] = useState(values); //Maybe a better namd than "state"

  const handleEditChangeFunc = (event) => { //You could put more arguments in here to make this into a reusable hook 
    const { name, value } = event.target; //Destructured const
    setState({
      ...state,
      [name]: value,

    });
  }


  return (
    <li id={props.todos.id} style={{ marginBottom: "10px" }}>
      <Card border={props.todos.priority === 'High' ? 'danger' : props.todos.priority === 'Medium' ? 'primary' : 'success'} 
      style={{ border: "3px solid", marginBottom: "10px" }}>
        <section 
        style={{ textDecoration: props.todos.completed && "line-through" /* The && is a ternary with a single condistion (props.todos.completed === true) ? "line-through" : "none" */ }}
        >
        <h2>
          {props.todos.taskBody}
        </h2>
        <h4>{props.todos.taskNotes}</h4>
        <h4>{props.todos.priority}</h4>
        <h4>{(props.todos.completed === true) ? "complete" : "incomplete"}</h4>
        </section>
        <Button
          variant="success"
          onClick={() => { props.toggleComplete(props.todos) }}
        >
          Complete
        </Button>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Edit
        </Button>
        <Collapse in={open}>
          <form >
            <label htmlFor="editBody">Edit task </label>
            <input
              type="text"
              name="taskBody" /*Name must be the same as state value the input is meant to update.*/
              //placeholder={props.todos.taskBody}
              id="taskBody"
              className="ToDo-edit-input"
              value={state.taskBody}
              onChange={handleEditChangeFunc}
            />
            <br />
            <label htmlFor="priority">Set priority</label>
            <select
              name="priority"
              className="TodoForm-select button"
              value={state.priority}
              //value={state.priority}
              onChange={handleEditChangeFunc}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <br />
            <textarea
              id="taskNotes"
              value={state.taskNotes}
              name="taskNotes"
              onChange={handleEditChangeFunc}
              rows="4" cols="50"
            />
            <br />
            <Button
              variant="primary"
            disabled={state.taskBody === "" ? true : false}
              //disabled={true}
              onClick={(event) => {
                event.preventDefault();
                setOpen(false)
                props.editFunc(state)
              }}
            >Update todo</Button>
          </form>
        </Collapse>
        <Button
          variant="danger"
          onClick={() => {
            props.deleteFunc(props.todos.id)
          }}
        >
          Delete todo
        </Button>
        
      </Card>
    </li>
  );
}

export default Todo;


//Class based build below
/*
import React, { Component } from "react";
import '../styles/ToDo.css';
//import { showToggler } from "../HelperFunctions"

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

  componentDidUpdate(prevProps, prevState){
    console.log("toDo componentDidUpdate")
    console.log(prevProps.data.taskBody) //Not working, supposed to show previous props, no idea why it doesn;t work.
    console.log(this.props.data.taskBody)
 }

  handleToggle() {
    this.props.completeToggle(this.props.data.id)
  }

  toggleEdit() {
    let form = document.getElementsByClassName("ToDo-form-" + this.props.data.id);
    //showToggler(this.props.data.id)
    form[0].classList.toggle("show-edit");
    this.setState({ editBody: this.props.data.taskBody, editNotes: this.props.data.taskNotes, editPriority: this.props.data.priority });
  }

  render() {
    const currentId = this.props.data.id;
    const completeOrNo = this.props.data.completed ? "completed" : ""
    const priorityLvl = this.props.data.priority;
    const priorityColor = priorityLvl === "High" ? "High" : priorityLvl === "Medium" ? "Medium" : "Low";

    return (
      <li className={"ToDo" + " " + priorityColor} id={currentId}>
        <h2 className={"ToDo-text Todo-body-" + currentId + " " + completeOrNo} onClick={this.handleToggle}>{this.props.data.taskBody}</h2>
        <p className={"ToDo-text ToDo-notes" + " " + completeOrNo}>{this.props.data.taskNotes}</p>
        <p>Priority: {this.props.data.priority}</p>
        <button className="button" onClick={this.handleToggle}>Complete</button>
        <br />
        <button className="showHide button" onClick={this.toggleEdit}>Show edit form</button>
        <button className="ToDo-x-button button" onClick={this.handleDelete}>X</button>
        <div className={"ToDo-form ToDo-form-" + currentId} >
          <form onSubmit={this.handleEdit}>
            <label htmlFor="editBody">Edit task </label>
            <input
              type="text"
              name="editBody" /*Name must be the same as state value the input is meant to update.
              //placeholder={this.props.body}
              id="editBody"
              className="ToDo-edit-input"
              value={this.state.editBody}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="priority">Choose priority</label>
            <select
              name="editPriority"
              className="TodoForm-select button"
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
            {this.state.editBody && <button className="button">Update</button>}
          </form>
          <button className="button" onClick={this.toggleEdit}>Close</button>
        </div>
      </li>
    )
  }
}

export default Todo;

*/