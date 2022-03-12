import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; //Imports the uuid npm package. 
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import useDate from "../../hooks/useDate";

import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import '../../styles/NewTodoForm.css';

function NewTodoForm(props) {
  const [open, setOpen] = useState(false);
  const [openNotes, setOpenNotes] = useState(false);
  const [currDate, dateConverter] = useDate();

  const [radioValue, setRadioValue] = useState('Medium');

  const radios = [
    { value: 'Low', color: "success" },
    { value: 'Medium', color: "primary" },
    { value: 'High', color: "danger" },
  ];

  return (
    <div className="New-todo-form p-3 text-start">
      <Form   >
        <Form.Group className="mb-2"  >
          <Form.Control
            type="text"
            name="taskBody" /*Name must be the same as state value the input is meant to update.*/
            id="taskBody"
            value={props.values.taskBody}
            placeholder="Add a new todo"
            onChange={props.handleChangeFunc}
            onClick={() => setOpen(true)}
            //aria-controls="example-collapse-text"
            aria-expanded={open}
          />
        </Form.Group>


        {/*
                <label htmlFor="taskBody">Task </label>
        <input
          type="text"
          id="taskBody"
          name="taskBody" 
          value={props.values.taskBody}
          onClick={() => setOpen(true)}
          //aria-controls="example-collapse-text"
          aria-expanded={open}
          placeholder="New todo"
          onChange={props.handleChangeFunc}
        />
  */}

        <Collapse in={open}>



          <div>

            <Button
              className="mb-2"
              onClick={() => setOpenNotes(!openNotes)}
              //aria-controls="example-collapse-text"
              aria-expanded={openNotes}
            >
              Notes
            </Button>

            <Collapse in={openNotes}>

              <Form.Group >
                <Form.Label><b>Notes</b></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="taskNotes"
                  value={props.values.taskNotes}
                  name="taskNotes"
                  onChange={props.handleChangeFunc}
                  placeholder="Any extra details?"
                />
              </Form.Group>

              {/* <div>
            <textarea
              id="taskNotes"
              name="taskNotes"
              value={props.values.taskNotes}
              onChange={props.handleChangeFunc}
              rows="4" cols="50"
            />
          </div>
  */}
            </Collapse>

            {/*
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
  */}

            <Form.Group className="mb-2 mt-2"  >
              <Form.Label><b>Priority</b></Form.Label>
              <br />
              <ButtonGroup>

                {radios.map((radio, num) => (
                  <Button
                    key={num}
                    variant={props.values.priority !== radio.value ? "outline-" + radio.color : radio.color}
                    name="priority"
                    value={radio.value}
                    onClick={(event) => {
                      props.handleChangeFunc(event)
                    }}
                  >
                    {radio.value}
                  </Button>
                ))}

                {/*
              {radios.map((radio, idx) => (
                <ToggleButton

                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={"outline-" + radio.color}
                  name="priority"
                  value={radio.name}
                  checked={radioValue === radio.name}

                  onChange={(e) => {
                    setRadioValue(e.currentTarget.value);
                    props.handleChangeFunc(e);
                  }}
                >
                  {radio.name}
                </ToggleButton>
              ))}
                */}

              </ButtonGroup>
            </Form.Group>
            <Form.Group className="mb-2 mt-2"  >
              <Form.Label><b>Deadline</b></Form.Label>
              <br />

              <Form.Control
                type="date"
                onChange={props.handleChangeFunc}
                value={props.values.deadline}
                onKeyDown={(e) => e.preventDefault()} id="deadline" min={dateConverter(currDate(), '/', '-')}
                name="deadline">
              </Form.Control>
              <Button
                className="mt-2 ps-1 pe-1 p-0"
                variant="danger"
                onClick={props.handleChangeFunc}
                name="deadline"
              >
                No Deadline
              </Button>
            </Form.Group>
            {/*
            <label htmlFor="deadline">Deadline:</label>
            <input type="date" onChange={props.handleChangeFunc} value={props.values.deadline} onKeyDown={(e) => e.preventDefault()} id="deadline" min={dateConverter(currDate(), '/', '-')} name="deadline"></input>
            <br />
              */}


            <Button
              className="mt-2"
              disabled={props.values.taskBody === "" ? true : false}
              onClick={(event) => {
                event.preventDefault();
                setOpenNotes(false); //Closes notes section again.
                props.submitTodo({ ...props.values, id: uuidv4(), completed: false, datePosted: currDate(), parentProj: props.proj }, props.proj); //Handles submission. 
                props.setValues({ taskBody: "", taskNotes: "", priority: "Medium", deadline: "" }); //Changes the fields back to blank for a new todo to be input
                setRadioValue("Medium");
              }}
            >I need to do this</Button>
          </div>
        </Collapse>

      </Form>
    </div>
  );
}

export default NewTodoForm;
