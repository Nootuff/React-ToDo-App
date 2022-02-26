import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import useDate from "../hooks/useDate";
import EditTodoForm from "./Forms/EditTodoForm";
import '../styles/Todo.css';


function Todo(props) {
  const [open, setOpen] = useState(true);

  const [currDate, dateConverter] = useDate()

  /*
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
  */

  function isLater(deadline, today) { //Move this to a hook? where would it go? 
    return deadline > today
  }

  const deadlineDisplay = (props.todo.deadline) !== "" && <h5 style={{ color: isLater(dateConverter(props.todo.deadline, '-', '-'), currDate()) ? null : "red" }}>Deadline: {dateConverter(props.todo.deadline, '-', '/')}</h5>;

  return (
    <li
      className="Todo shadow"
      id={props.todo.id}
    >

      <Collapse in={open}>
        <Card border={props.todo.priority === 'High' ? 'danger' : props.todo.priority === 'Medium' ? 'primary' : 'success'}
          style={{ border: "3px solid", marginBottom: "10px" }}>
          <section
            style={{ textDecoration: props.todo.completed && "line-through" /* The && is a ternary with a single condistion */ }}
          >
            <h2 onClick={() => {
              props.toggleComplete(props.todos, props.proj)
            }}>
              {props.todo.taskBody}
            </h2>
            <h4>{props.todo.taskNotes}</h4>
            <h4>Priority: {props.todo.priority}</h4>
            <h5>Posted: {props.todo.datePosted}</h5>

            {deadlineDisplay}
          </section>
          <Button
            variant="success"
            onClick={() => {
              props.toggleComplete(props.todo, props.proj)
            }}
          >
            Done!
          </Button>

          <EditTodoForm
            todo={props.todo}
            proj={props.proj}
            editTodo={props.editTodo}
          />


          <Button
            variant="danger"
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                { props.deleteTodo(props.todo.id, props.proj) }
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