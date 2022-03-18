import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

import { FaEdit, FaTrashAlt } from "react-icons/fa";

import useDate from "../../hooks/useDate";
import EditTodoForm from "../Forms/EditTodoForm";
import '../../styles/TodoStyles.css';
import '../../styles/index.css';

function Todo(props) {
  const [open, setOpen] = useState(true);
  const [openDetails, setOpenDetails] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [currDate, dateConverter] = useDate()

  function isLater(deadline, today) { //Move this to a hook? where would it go? 
    return new Date(deadline) > new Date(today)
  }

  const deadlineDisplay = (props.todo.deadline) !== "" && <h5 style={{ color: isLater(props.todo.deadline, currDate()) ? null : "var(--danger-red)" }}>Deadline: {dateConverter(props.todo.deadline, "-", "/")}</h5>;

  return (
    <Collapse in={open}>
      <li
        className="Todo container p-0"
        id={props.todo.id}
      >

        {/*<div class="container" style={{ border: "" }}>*/}

        <div class="d-flex" /*style={{border: "5px solid cyan"}}*/>

          <div
            className={"m-0 flex-shrink-1 rounded-start " + (props.todo.completed && "opacity-50")}
            style={{ backgroundColor: props.todo.priority === 'High' ? 'var(--danger-red)' : props.todo.priority === 'Medium' ? 'var(--primary-blue)' : 'var(--success-green)' }}
          >
            <table 
            className="Container m-1" 
            onClick={() => {
              props.proj !== "3" && props.toggleComplete(props.todo, props.proj) /*User cannot click on header to toggle complete if the todo is in deletion storage.*/
            }}
            >
              <tbody className="text-center">
                <tr>
                  <td className="align-middle p-0 "><span className={"tick " + (props.todo.completed ? "tick-show" : "tick-hidden") } /*style={{opacity: props.todo.completed ? "1" : "0" }} */>&#10003;</span></td>
                </tr>
              </tbody>
            </table>

            {/* <div class="form-check">
             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input> 
 
            </div>*/}

          </div>
          <div className="Todo-body p-3  w-100 text-start"  >

            <div
              className={props.todo.completed && "opacity-50"}
              style={{ textDecoration: props.todo.completed && "line-through" /* The && is a ternary with a single condistion */ }} >
              <div class="row" >
                <h4
                  onClick={() => {
                    props.proj !== "3" && props.toggleComplete(props.todo, props.proj) /*User cannot click on header to toggle complete if the todo is in deletion storage.*/
                  }}
                >
                  {props.todo.taskBody}
                </h4 >
              </div>
              <div class="row">
                {deadlineDisplay}
              </div>
            </div>
            <Collapse in={openDetails}>
              <div

                className={" flex-row " + (props.todo.completed && "opacity-50")}

                style={{ border: "", textDecoration: props.todo.completed && "line-through" /* The && is a ternary with a single condistion */ }}
              >
                <hr />
                <p style={{ wordWrap: "break-word" }} ><b> Details:</b> {props.todo.taskNotes}</p>

                <p><b>Priority:</b> {props.todo.priority}</p>
                <p><b>Posted:</b> {dateConverter(props.todo.datePosted, "-", "/")}</p>
              </div>
            </Collapse>
            <div className="m-0  d-flex flex-row bd-highlight" style={{ border: " " }}>
              {props.proj !== "3" &&
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
                {props.proj === "3" &&
                  <div class="Todo-control bd-highlight me-2" >
                    <Button
                      className="p-0 pe-1 ps-1"
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
                  </div>
                }
                <div class="Todo-control bd-highlight me-2" >
                  <FaTrashAlt
                    style={{ color: "#DC3545" }}
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => {
                        props.deleteTodo(props.todo, props.proj)
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
                  todo={props.todo}
                  proj={props.proj}
                  editTodo={props.editTodo}
                  setOpenEdit={setOpenEdit}
                />
              </div>
            </Collapse>
          </div>
        </div>



        {/*
      <Collapse in={open}>




        <Card border={props.todo.priority === 'High' ? 'danger' : props.todo.priority === 'Medium' ? 'primary' : 'success'}
          style={{ border: "3px solid", marginBottom: "10px" }}>
          <section
            style={{ textDecoration: props.todo.completed && "line-through" /* The && is a ternary with a single condistion  }}
          >
            <h2 onClick={() => {
              props.proj !== "3" && props.toggleComplete(props.todo, props.proj) /*User cannot click on header to toggle complete if the todo is in deletion storage.
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
    
    */}

      </li>
    </Collapse>
  );
}

export default Todo;