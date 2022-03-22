import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; //Imports the uuid npm package. 
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import useDate from "../../hooks/useDate";
import '../../styles/index.css';

function NewTodoForm({ handleChangeFunc, submitTodo, values, setValues, proj }) {
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
    <div className="New-todo-form p-3 text-start background-grey rounded">
      <Form   >
        <Form.Group className="mb-2"  >
          <Form.Control
            type="text"
            name="taskBody" /*Name must be the same as state value the input is meant to update.*/
            id="taskBody"
            value={values.taskBody}
            placeholder="Add a new todo"
            onChange={handleChangeFunc}
            onClick={() => setOpen(true)}
            //aria-controls="example-collapse-text"
            aria-expanded={open}
          />
        </Form.Group>
        <Collapse in={open}>
          <div>
            <Button
              className="mb-2"
              onClick={() => setOpenNotes(!openNotes)}
              aria-controls="collapse-notes"
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
                  value={values.taskNotes}
                  name="taskNotes"
                  onChange={handleChangeFunc}
                  placeholder="Any extra details?"
                />
              </Form.Group>
            </Collapse>
            <Form.Group className="mb-2 mt-2"  >
              <Form.Label><b>Priority</b></Form.Label>
              <br />
              <ButtonGroup>
                {radios.map((radio, num) => (
                  <Button
                    key={num}
                    variant={values.priority !== radio.value ? "outline-" + radio.color : radio.color}
                    name="priority"
                    value={radio.value}
                    onClick={(event) => {
                      handleChangeFunc(event)
                    }}
                  >
                    {radio.value}
                  </Button>
                ))}
              </ButtonGroup>
            </Form.Group>
            <Form.Group className="mb-2 mt-2"  >
              <Form.Label><b>Deadline</b></Form.Label>
              <br />

              <Form.Control
                type="date"
                onChange={handleChangeFunc}
                value={values.deadline}
                onKeyDown={(e) => e.preventDefault()} id="deadline" min={dateConverter(currDate(), '/', '-')}
                name="deadline">
              </Form.Control>
              <Button
                className="mt-2 ps-1 pe-1 p-0"
                variant="danger"
                onClick={handleChangeFunc}
                name="deadline"
              >
                No Deadline
              </Button>
            </Form.Group>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup aria-label="Toolbar with button groups">
                <Button
                  className="me-2"
                  disabled={values.taskBody === "" ? true : false}
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenNotes(false); //Closes notes section again.
                    submitTodo({ ...values, id: uuidv4(), completed: false, datePosted: currDate(), parentProj: proj }, proj); //Handles submission. 
                    setValues({ taskBody: "", taskNotes: "", priority: "Medium", deadline: "" }); //Changes the fields back to blank for a new todo to be input
                    setRadioValue("Medium");
                  }}
                >
                  I need to do this
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button
                  variant="danger"
                  onClick={() => { setOpen(false) }}
                >
                  Close
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
        </Collapse>
      </Form>
    </div>
  );
}

export default NewTodoForm;
