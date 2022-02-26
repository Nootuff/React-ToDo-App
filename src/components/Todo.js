import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import useDate from "../hooks/useDate";
import '../styles/Todo.css';


function Todo(props) {
  const [open, setOpen] = useState(true);
  const [openEdit, setOpenEdit] = useState(false);
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

  const [state, setState] = useState(values);

  const handleEditChangeFunc = (event) => { //If you can't solve this issue then just leave it. 
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  function isLater(deadline, today) { //Move this to a hook? where would it go? 
    return deadline > today
  }

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
              props.toggleComplete(props.todos, props.proj)
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
              props.toggleComplete(props.todos, props.proj)
            }}
          >
            Done!
          </Button>
          <Button
            onClick={() => setOpenEdit(!openEdit)}
            aria-controls="example-collapse-text"
            aria-expanded={openEdit}
          >
            Edit
          </Button>
          <Collapse in={openEdit}>
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
                  setOpenEdit(false)
                  props.editTodo(state, props.proj)
                }}
              >
                Update todo
              </Button>
            </form>
          </Collapse>
          <Button
            variant="danger"
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                { props.deleteTodo(props.todos.id, props.proj) }
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