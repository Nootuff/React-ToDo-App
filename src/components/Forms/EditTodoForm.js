import React, { useState } from "react";

import useDate from "../../hooks/useDate";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import Dropdown from 'react-bootstrap/Dropdown';

import Form from 'react-bootstrap/Form';



import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../../styles/index.css';

function EditTodoForm(props) {
    //const [openEdit, setOpenEdit] = useState(false);
    const [currDate, dateConverter] = useDate()

    let values = { //Stores all the todo's details for them to be updated when editing. Any way to refactor this?
        taskBody: props.todo.taskBody,
        taskNotes: props.todo.taskNotes,
        priority: props.todo.priority,
        id: props.todo.id,
        completed: props.todo.completed,
        deadline: props.todo.deadline,
        datePosted: props.todo.datePosted,
        parentProj: props.todo.parentProj
    }

    const [state, setState] = useState(values);
    //const [editRadioValue, setEditRadioValue] = useState(state.priority);

    const handleEditChangeFunc = (event) => { //If you can't solve this issue then just leave it. 
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        });
    }

    const editRadios = [
        { value: 'Low', color: "success" },
        { value: 'Medium', color: "primary" },
        { value: 'High', color: "danger" },
    ];

    return (
        <div>
            {/*  <Button
                onClick={() => setOpenEdit(!openEdit)}
                aria-controls="example-collapse-text"
                aria-expanded={openEdit}
            >
                Edit
            </Button>
            <Collapse in={openEdit}>
                */}
            <Form >

                <Form.Group className="mb-2"  >
                    <Form.Label><b>Edit Todo</b></Form.Label>
                    <Form.Control
                        type="text"
                        name="taskBody" /*Name must be the same as state value the input is meant to update.*/
                        id="taskBody"
                        value={state.taskBody}
                        onChange={handleEditChangeFunc}
                    />
                </Form.Group>

                <Form.Group className="mb-2"  >
                    <Form.Label><b>Edit notes</b></Form.Label>
                    <Form.Control as="textarea" rows={3} id="taskNotes"
                        value={state.taskNotes}
                        name="taskNotes"
                        onChange={handleEditChangeFunc} />
                </Form.Group>

                {/*
                <label htmlFor="priority">Set priority</label>
                <select 
                    name="priority"
                    className="TodoForm-select button"
                    value={state.priority}
                    onChange={handleEditChangeFunc}
                    style={{ backgroundColor: "var(--danger-red)" }}
                >
                    <option style={{ backgroundColor: "var(--danger-red)" }} value="High">High</option>
                    <option style={{ backgroundColor: "var(--primary-blue)" }} value="Medium">Medium</option>
                    <option value="Low">Low</option>
            </select> */}


                {/*Can you make this dry by rendering it using a map? */}

                <Form.Group className="mb-2"  >
                    <Form.Label><b>Change Priority</b></Form.Label>
                    <br />
                    <ButtonGroup aria-label="Basic example">
                        {editRadios.map((editRadio, num) => (
                            <Button
                                key={num}
                                variant={state.priority !== editRadio.value ? "outline-" + editRadio.color : editRadio.color}
                                name="priority"
                                value={editRadio.value}
                                onClick={(event) => {
                                    handleEditChangeFunc(event)
                                }}
                            >
                                {editRadio.value}
                            </Button>
                        ))}


                        {/* <Button
                           
                            variant={state.priority !== "High" ? "outline-danger" : "danger"}
                            //onChange={handleEditChangeFunc}
                            value="High"
                            name="priority"
                            onClick={(event) => {
                                handleEditChangeFunc(event)
                            }}
                        >
                            High
                        </Button>
                        <Button
                            
                            variant={state.priority !== "Medium" ? "outline-primary" : "primary"}
                            //onChange={handleEditChangeFunc}
                            value="Medium"
                            name="priority"
                            onClick={(event) => {
                                handleEditChangeFunc(event)
                            }}
                        >
                            Medium
                        </Button>
                        <Button
                          
                            variant={state.priority !== "Low" ? "outline-success" : "success"}
                            styling={{ backgroundColor: "" }}
                            value="Low"
                            name="priority"
                            onClick={(event) => {
                                handleEditChangeFunc(event)
                            }}
                        >
                            Low
                        </Button>
                        */}

                    </ButtonGroup>
                </Form.Group>

                <Form.Group className="mb-2"  >
                    <Form.Label><b>Change deadline</b></Form.Label>
                    <br />
                    <Form.Control
                        type="date"
                        onChange={handleEditChangeFunc}
                        value={state.deadline}
                        onKeyDown={(e) => e.preventDefault()} id="deadline" min={dateConverter(currDate(), '/', '-')}
                        name="deadline">
                    </Form.Control>

                    <Button
                        className="mt-2 ps-1 pe-1 p-0"
                        variant="danger"
                        onClick={handleEditChangeFunc}
                        name="deadline"
                        >
                        Remove Deadline
                    </Button>

                </Form.Group>

                {/*   
                <label htmlFor="editBody">Edit task </label>
                <input
                    type="text"
                    name="taskBody" 
                    id="taskBody"
                    value={state.taskBody}
                    onChange={handleEditChangeFunc}
                />



               <ButtonGroup>

                        {editRadios.map((editRadio, num) => (
                            <ToggleButton
                                key={num}
                                id={`editRadio-${num}`}
                                type="radio"
                                variant={"outline-" + editRadio.color}
                                name="priority"
                                value={editRadio.name}
                                checked={editRadioValue === editRadio.name}
                                onChange={(e) => {
                                    //alert("Click")
                                    setEditRadioValue(e.currentTarget.value);
                                    handleEditChangeFunc(e);
                                }}
                            >
                                {editRadio.name}
                            </ToggleButton>
                        ))}
                            </ButtonGroup>  

                <br />
                <textarea
                    id="taskNotes"
                    value={state.taskNotes}
                    name="taskNotes"
                    onChange={handleEditChangeFunc}
                    rows="4" cols="50"
                />
                <br />

                */}


                <Button
                    className="mt-3"
                    variant="primary"
                    disabled={state.taskBody === "" ? true : false}
                    onClick={(event) => {
                        event.preventDefault();
                        props.setOpenEdit(false)
                        props.editTodo(state, props.proj)
                    }}
                >
                    Update todo
                </Button>
            </Form>
            {/* </Collapse>*/}
        </div>
    );
}

export default EditTodoForm;