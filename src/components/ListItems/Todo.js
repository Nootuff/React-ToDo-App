import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useDate from "../../hooks/useDate";
import EditTodoForm from "../Forms/EditTodoForm";
import '../../styles/TodoStyles.css';
import '../../styles/index.css';

function Todo({ todo, deleteTodo, editTodo, toggleComplete, restore, proj }) {
  const [open, setOpen] = useState(true);
  const [openDetails, setOpenDetails] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [currDate, dateConverter] = useDate()

  function isLater(deadline, today) { //Move this to a hook? where would it go? 
    return new Date(deadline) > new Date(today)
  }

  const deadlineDisplay = (todo.deadline) !== "" && <h5 style={{ color: isLater(todo.deadline, currDate()) ? null : "var(--danger-red)" }}>Deadline: {dateConverter(todo.deadline, "-", "/")}</h5>;

  return (
    <Collapse in={open}>
      <li
        className="Todo container p-0"
        id={todo.id}
      >

      
        <div class="d-flex" /*style={{border: "5px solid cyan"}}*/>

          <div
            className={"m-0 flex-shrink-1 rounded-start " + (todo.completed && "opacity-50")}
            style={{ backgroundColor: todo.priority === 'High' ? 'var(--danger-red)' : todo.priority === 'Medium' ? 'var(--primary-blue)' : 'var(--success-green)' }}
          >
            <table 
            className="Container m-1" 
            onClick={() => {
              proj !== "3" && toggleComplete(todo, proj) /*User cannot click on header to toggle complete if the todo is in deletion storage.*/
            }}
            >
              <tbody className="text-center">
                <tr>
                  <td className="align-middle p-0 "><span className={"tick " + (todo.completed ? "tick-show" : "tick-hidden") } /*style={{opacity: props.todo.completed ? "1" : "0" }} */>&#10003;</span></td>
                </tr>
              </tbody>
            </table>

          

          </div>
          <div className="Todo-body p-3  w-100 text-start"  >

            <div
              className={todo.completed && "opacity-50"}
              style={{ textDecoration: todo.completed && "line-through" /* The && is a ternary with a single condistion */ }} >
              <div class="row" >
                <h4
                  onClick={() => {
                    proj !== "3" && toggleComplete(todo, proj) /*User cannot click on header to toggle complete if the todo is in deletion storage.*/
                  }}
                >
                  {todo.taskBody}
                </h4 >
              </div>
              <div class="row">
                {deadlineDisplay}
              </div>
            </div>
            <Collapse in={openDetails}>
              <div
                className={" flex-row " + (todo.completed && "opacity-50")}
                style={{ border: "", textDecoration: todo.completed && "line-through" /* The && is a ternary with a single condistion */ }}
              >
                <hr />
                {todo.taskNotes !== "" && <p style={{ wordWrap: "break-word" }} ><b> Details:</b> {todo.taskNotes}</p>}

                <p><b>Priority:</b> {todo.priority}</p>
                <p><b>Posted:</b> {dateConverter(todo.datePosted, "-", "/")}</p>
              </div>
            </Collapse>
            <div className="m-0  d-flex flex-row bd-highlight" style={{ border: " " }}>
              {proj !== "3" &&
                <span className=" d-flex flex-row">
                  <div class="  bd-highlight me-2" style={{ border: " " }}>
                    <Button className="p-0 pe-1 ps-1"
                      onClick={() => setOpenDetails(!openDetails)}
                      aria-controls="example-collapse-text"
                      aria-expanded={openDetails}
                    >
                      Details
                    </Button>
                  </div>
                  <div class="Todo-control bd-highlight me-2">
                    <FaEdit
                      onClick={() => setOpenEdit(!openEdit)}
                      aria-controls="example-collapse-text"
                      aria-expanded={openEdit}
                    />
                  </div>
                </span>
              }
              <span className=" d-flex flex-row">
                {proj === "3" &&
                  <div class="Todo-control bd-highlight me-2" >
                    <Button
                      className="p-0 pe-1 ps-1"
                      variant="success"
                      onClick={() => {
                        setOpen(false);
                        setTimeout(() => {
                          restore(todo);
                        }, 300);
                      }}
                    >
                      Restore
                    </Button>
                  </div>
                }
                <div class="Todo-control bd-highlight me-2" >
                  <FaTrashAlt
                    style={{ color: "#DC3545" }}
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => {
                        deleteTodo(todo, proj)
                      }, 300);
                    }}
                  />
                </div>
              </span>
            </div>
            <Collapse in={openEdit}>
              <div>
                <hr />
                <EditTodoForm
                  todo={todo}
                  proj={proj}
                  editTodo={editTodo}
                  setOpenEdit={setOpenEdit}
                />
              </div>
            </Collapse>
          </div>
        </div>
      </li>
    </Collapse>
  );
}

export default Todo;