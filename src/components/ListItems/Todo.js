import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import useDate from "../../hooks/useDate";
import EditTodoForm from "../Forms/EditTodoForm";
import '../../styles/Todo.css';

function Todo(props) {
  const [open, setOpen] = useState(true);
  const [currDate, dateConverter] = useDate()

  function isLater(deadline, today) { //Move this to a hook? where would it go? 
    return new Date(deadline) > new Date(today)
  }

  const deadlineDisplay = (props.todo.deadline) !== "" && <h5 style={{ color: isLater(props.todo.deadline, currDate()) ? null : "red" }}>Deadline: {dateConverter(props.todo.deadline, "-", "/")}</h5>;

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
              props.proj !== "3" && props.toggleComplete(props.todo, props.proj) /*User cannot click on header to toggle complete if the todo is in deletion storage.*/
            }}
            >
              {props.todo.taskBody}
            </h2>
            <h4>{props.todo.taskNotes}</h4>
            <h4>Priority: {props.todo.priority}</h4>
            <h5>Posted: {dateConverter(props.todo.datePosted, "-", "/")}</h5>
            {deadlineDisplay}
          </section>
          {props.proj !== "3" &&
            <div>
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
            </div>
          }
          <Button
            variant="danger"
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                props.deleteTodo(props.todo, props.proj) 
              }, 300);
            }}
          >
            Delete todo
          </Button>
          {props.proj === "3" &&
            <Button
              variant="success"
              onClick={() => {
                setOpen(false);
                setTimeout(() => {
                  props.restore(props.todo);
                }, 300);
              }}
            >
              Restore
            </Button>
          }
        </Card>
      </Collapse>
    </li>
  );
}

export default Todo;