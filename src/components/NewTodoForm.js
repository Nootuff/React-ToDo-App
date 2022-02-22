import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; //Imports the uuid npm package. 
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import useDate from "../hooks/useDate";

function NewTodoForm(props) {
  const [open, setOpen] = useState(false);
  const [openNotes, setOpenNotes] = useState(false);
  const [currDate, dateConverter] = useDate();

  return (
    <div >
      <form style={{ border: "1px solid red" }} >
        <h2>Enter New Todo</h2>
        <label htmlFor="taskBody">Task </label>
        <input
          type="text"
          id="taskBody"
          name="taskBody" /*Name must be the same as state value the input is meant to update.*/
          value={props.values.taskBody}
          onClick={() => setOpen(true)}
          //aria-controls="example-collapse-text"
          aria-expanded={open}
          placeholder="New todo"
          onChange={props.handleChangeFunc}
        />
        <br />
        <Collapse in={open}>
          <div>
            <label htmlFor="priority">Choose priority </label>
            <select
              name="priority"
              className="TodoForm-select button"
              value={props.values.priority}
              onChange={props.handleChangeFunc}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <br />
            <Button
              onClick={() => setOpenNotes(!openNotes)}
              //aria-controls="example-collapse-text"
              aria-expanded={openNotes}
            >
              Notes
            </Button>
            <br />
            <Collapse in={openNotes}>
              <div>
                <textarea
                  id="taskNotes"
                  name="taskNotes"
                  value={props.values.taskNotes}
                  onChange={props.handleChangeFunc}
                  rows="4" cols="50"
                />
              </div>
            </Collapse>
            <br />
            <label htmlFor="deadline">Deadline:</label>
            <input type="date" onChange={props.handleChangeFunc} value={props.values.deadline} onKeyDown={(e) => e.preventDefault()} id="deadline" min={dateConverter(currDate(), '/', '-')} name="deadline"></input>
            <br />
            <Button
              disabled={props.values.taskBody === "" ? true : false}
              onClick={(event) => {
                event.preventDefault();
                setOpenNotes(false); //Closes notes section again.
                {props.home ?
                    props.submitTodo({ ...props.values, id: uuidv4(), completed: false, datePosted: currDate() }) //Handles submission. 
                    :
                    props.submitProjectTodo({ ...props.values, id: uuidv4(), completed: false, datePosted: currDate() }, props.view);
                }
                props.setValues({ taskBody: "", taskNotes: "", priority: "Medium", deadline: "" }); //Changes the fields back to blank for a new todo to be input
                //console.log()
              }}
            >I need to do this</Button>
          </div>
        </Collapse>

      </form>
    </div>
  );
}

export default NewTodoForm;

//Class based build below
/*
import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'; //Imports the uuid npm package. 
import '../styles/NewTodoForm.css';
//import { showToggler } from "../HelperFunctions"

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

  form = document.getElementsByClassName("ToDo-form");

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleToggle() {
    //let form = document.getElementsByClassName("ToDo-form");
    //showToggler(this.props.data.id)
    this.form[0].classList.toggle("show-create");
    //this.setState({ editBody: this.props.data.taskBody, editNotes: this.props.data.taskNotes, editPriority: this.props.data.priority });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newToDo = { ...this.state, id: uuidv4() }
    this.props.creatorFunc(newToDo);
    this.form[0].classList.remove("show-create");
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
          name="taskBody" /*Name must be the same as state value the input is meant to update.
          value={this.state.taskBody}
          placeholder="New todo"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="priority">Choose priority </label>
        <select
          name="priority"
          className="TodoForm-select button"
          //defaultValue={"Medium"}
          value={this.state.priority}
          onChange={this.handleChange}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <p className="showHide button" onClick={this.handleToggle}>Notes</p>
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

        {this.state.taskBody && <button className="button" onClick={this.handleSubmit} >I need to do this</button>} {/*This is how to you write a ternay operator with only one condition in react }
        {/*{(this.state.taskBody) ? <button>I need to do this</button>}}
      </form>
    )
  }
}

export default NewTodoForm;

*/