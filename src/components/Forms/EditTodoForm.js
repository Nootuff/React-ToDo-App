import React, { useState } from "react";
import useDate from "../../hooks/useDate";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../../styles/index.css';

function EditTodoForm({ todo, proj, editTodo, setOpenEdit }) {
    //const [openEdit, setOpenEdit] = useState(false);
    const [currDate, dateConverter] = useDate()

    let values = { //Stores all the todo's details for them to be updated when editing. Any way to refactor this?
        taskBody: todo.taskBody,
        taskNotes: todo.taskNotes,
        priority: todo.priority,
        id: todo.id,
        completed: todo.completed,
        deadline: todo.deadline,
        datePosted: todo.datePosted,
        parentProj: todo.parentProj
    }

    const [state, setState] = useState(values);


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
            <Form>
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
                    <Form.Control
                        as="textarea"
                        rows={3} id="taskNotes"
                        value={state.taskNotes}
                        name="taskNotes"
                        onChange={handleEditChangeFunc}
                    />
                </Form.Group>
                <Form.Group className="mb-2"  >
                    <Form.Label><b>Change Priority</b></Form.Label>
                    <br />
                    <ButtonGroup
                        className="d-md-block d-none"
                        aria-label="Basic example"
                    >
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
                    </ButtonGroup>
                    <ButtonGroup
                        vertical
                        className="d-md-none d-block"
                        aria-label="Basic example"
                    >
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
                        name="deadline"
                    >
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
                <Button
                    className="mt-3"
                    variant="primary"
                    disabled={state.taskBody === "" ? true : false}
                    onClick={(event) => {
                        event.preventDefault();
                        setOpenEdit(false)
                        editTodo(state, proj)
                    }}
                >
                    Update todo
                </Button>
                <Button /*See if you can make closing this form reset everything to default*/
                    className="ms-2 mt-3"
                    variant="danger"
                    onClick={() => {
                        setOpenEdit(false)
                    }}
                >
                    Close
                </Button>
            </Form>
        </div>
    );
}

export default EditTodoForm;