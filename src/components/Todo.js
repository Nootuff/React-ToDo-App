import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import useDate from "../hooks/useDate";
import '../styles/Todo.css';


function Todo(props) {
  const [open, setOpen] = useState(true);
  const [openNotes, setOpenNotes] = useState(false);
  const [currDate, dateConverter] = useDate()

  let values = {
    taskBody: props.todos.taskBody,
    taskNotes: props.todos.taskNotes,
    completed: props.todos.completed,
    priority: props.todos.priority,
    datePosted: props.todos.datePosted,
    deadline: props.todos.deadline,
    id: props.todos.id
  }

  const [state, setState] = useState(values); //Maybe a better namd than "state"

  const handleEditChangeFunc = (event) => { //If you can't solve this issue then just leave it. 
    const { name, value } = event.target; 
    setState({
      ...state,
      [name]: value,
    });
  }

  /*
  function convertDigitIn(str) { //Used to convert the deadline to a display date. You could make multiple different versions of this propr replacing the - / with properties that are set by arguments on invocation. 
    return str.split('-').reverse().join('-');
  } */

  function isLater(deadline, today) { //Move this to a hook? where would it go? 
    return deadline > today
  }

  //var today = currDate() //got to change this name

  /*
  function convertBack(str) {
    return str.split('/').reverse().join('-');
  } */


  const deadlineDisplay = (props.todos.deadline) !== "" && <h5 style={{ color: isLater(dateConverter(props.todos.deadline , '-', '-'), currDate()) ? null : "red" }}>Deadline: {dateConverter(props.todos.deadline , '-', '/')}</h5>; 

  return (
    <li
      className="Todo shadow"
      id={props.todos.id}
    >
      
      <Collapse in={open}>
        <Card border={props.todos.priority === 'High' ? 'danger' : props.todos.priority === 'Medium' ? 'primary' : 'success'}
          style={{ border: "3px solid", marginBottom: "10px" }}>
          <section
            style={{ textDecoration: props.todos.completed && "line-through" /* The && is a ternary with a single condistion */ }}
          >
            <h2 onClick={() => { props.toggleComplete(props.todos) }}>
              {props.todos.taskBody}
            </h2>
            <h4>{props.todos.taskNotes}</h4>
            <h4>Priority: {props.todos.priority}</h4>
            <h5>Posted: {props.todos.datePosted}</h5>

            {deadlineDisplay}
          </section>
          <Button
            variant="success"
            onClick={() => { props.toggleComplete(props.todos) }}
          >
            Done!
          </Button>
          <Button
            onClick={() => setOpenNotes(!openNotes)}
            aria-controls="example-collapse-text"
            aria-expanded={openNotes}
          >
            Edit
          </Button>
          <Collapse in={openNotes}>
            <form >
              <label htmlFor="editBody">Edit task </label>
              <input
                type="text"
                name="taskBody" /*Name must be the same as state value the input is meant to update.*/
                //placeholder={props.todos.taskBody}
                id="taskBody"
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
              <label htmlFor="deadline">Change deadline:</label>
            <input type="date" onChange={handleEditChangeFunc} value={state.deadline} onKeyDown={(e) => e.preventDefault()} id="deadline" min={dateConverter(currDate(), '/', '-')} name="deadline"></input>
            <Button  variant="danger" onClick={handleEditChangeFunc} name="deadline" value="" >Remove Deadline</Button>
            <br />

              <Button
                variant="primary"
                disabled={state.taskBody === "" ? true : false}

                onClick={(event) => {
                  event.preventDefault();
                  setOpenNotes(false)
                  props.editFunc(state)
                }}
              >Update todo</Button>
            </form>
          </Collapse>
          <Button
            variant="danger"
            onClick={() => {
              setOpen(false);
              setTimeout(() => { props.deleteFunc(props.todos.id); }, 300);
            }}
          >
            Delete todo
          </Button>

        </Card>
      </Collapse>
     
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