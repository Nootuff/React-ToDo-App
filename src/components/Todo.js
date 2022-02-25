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

  let values = { //Stores all the todo's details for them to be updated when editing.
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


  const deadlineDisplay = (props.todos.deadline) !== "" && <h5 style={{ color: isLater(dateConverter(props.todos.deadline, '-', '-'), currDate()) ? null : "red" }}>Deadline: {dateConverter(props.todos.deadline, '-', '/')}</h5>;

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
            <h2 onClick={() => {
              props.home ?
                props.toggleComplete(props.todos)
                :
                props.completeProjectTodo(props.view, props.todos)
            }}>
              {props.todos.taskBody}
            </h2>
            <h4>{props.todos.taskNotes}</h4>
            <h4>Priority: {props.todos.priority}</h4>
            <h5>Posted: {props.todos.datePosted}</h5>

            {deadlineDisplay}
          </section>
          <Button
            variant="success"
            onClick={() => {
              props.home ?
                props.toggleComplete(props.todos)
                :
                props.completeProjectTodo(props.view, props.todos)
            }}
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
              <Button variant="danger" onClick={handleEditChangeFunc} name="deadline" value="" >Remove Deadline</Button>
              <br />

              <Button
                variant="primary"
                disabled={state.taskBody === "" ? true : false}

                onClick={(event) => {
                  event.preventDefault();
                  setOpenNotes(false)
                  props.home ?
                    props.editFunc(state)
                    :
                    props.editProjectTodo(props.view, state)
                }}
              >Update todo</Button>
            </form>
          </Collapse>
          <Button
            variant="danger"
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                {
                  props.home ?
                    props.deleteFunc(props.todos.id)
                    :
                    props.deleteProjectTodo(props.view, props.todos.id);
                }
              }, 300);
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