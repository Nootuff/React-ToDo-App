import React, { useState } from "react";

import useDate from "../../hooks/useDate";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function EditTodoForm(props) {
    const [openEdit, setOpenEdit] = useState(false);
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
    const [editRadioValue, setEditRadioValue] = useState(state.priority);

    const handleEditChangeFunc = (event) => { //If you can't solve this issue then just leave it. 
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        });
    }

    const editRadios = [
        { name: 'Low', color: "success" },
        { name: 'Medium', color: "primary" },
        { name: 'High', color: "danger" },
    ];

    return (
        <div>
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
                        id="taskBody"
                        value={state.taskBody}
                        onChange={handleEditChangeFunc}
                    />
                    <br />
                    <label htmlFor="priority">Set priority</label>

                    {/*
                    <select
                        name="priority"
                        className="TodoForm-select button"
                        value={state.priority}
                        onChange={handleEditChangeFunc}
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
    */}
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
        </div>
    );
}

export default EditTodoForm;