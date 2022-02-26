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
                props.submitTodo({ ...props.values, id: uuidv4(), completed: false, datePosted: currDate() }, props.proj); //Handles submission. 
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
