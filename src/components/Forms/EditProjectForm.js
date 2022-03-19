import React, { useState, useEffect } from "react";

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import '../../styles/index.css';

function EditProjectForm({ viewedProject, editProject, proj, setOpen }) {

    let values = {
        projName: viewedProject.projName,
        projNotes: viewedProject.projNotes,
    }

    const [state, setState] = useState("");

    useEffect(() => {
        setState(values);
        //console.log("itchanges")
    }, [viewedProject])

    const handleEditChangeFunc = (event) => { //If you can't solve this issue then just leave it. 
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        });
    }

    return (
        <div>
            <Form>

                <Form.Group className="mb-2"  >
                    <Form.Label><b>Edit Project Name</b></Form.Label>

                    <Form.Control
                        type="text"
                        name="projName" /*Name must be the same as state value the input is meant to update.*/
                        id="projName"
                        value={state.projName}
                        maxlength="30"
                        onChange={handleEditChangeFunc}
                    />
                </Form.Group>
                <Form.Group className="mb-2"  >
                    <Form.Label><b>Edit details</b></Form.Label>
                    <Form.Control as="textarea" rows={3} id="projNotes"
                        value={state.projNotes}
                        name="projNotes"
                        onChange={handleEditChangeFunc} />
                </Form.Group>
                <Button
                    className="mb-2"
                    variant="primary"
                    disabled={state.projName === "" ? true : false}
                    onClick={(event) => {
                        event.preventDefault();
                        setOpen(false)
                        editProject(state, proj);
                    }}
                >Update</Button>
            </Form>

        </div>
    );
}

export default EditProjectForm;