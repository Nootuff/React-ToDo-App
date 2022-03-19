import React, { useState, useEffect } from "react";

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function EditProjectForm(props) {
    //const [openEdit, setOpenEdit] = useState(false);

   // const holder = props.viewedProject;

    let values = {

        //  projId: props.viewedProject.projId,
        projName: props.viewedProject.projName,
        projNotes: props.viewedProject.projNotes,
        //  projTodos: props.viewedProject.projTodos

        /*
         projId: holder.projId,
         projName: holder.projName,
         projNotes: holder.projNotes,
         projTodos: holder.projTodos
         */
    }

    const [state, setState] = useState("");


    useEffect(() => {
        setState(values);
        console.log("itchanges")
    }, [props.viewedProject])


    //console.log("values here");
    //console.log(state);

    const handleEditChangeFunc = (event) => { //If you can't solve this issue then just leave it. 
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        });
    }

    return (
        <div >

            {/* <Button
                onClick={() => setOpenEdit(!openEdit)}
                aria-controls="example-collapse-text"
                aria-expanded={openEdit}
            >
                Edit Project
            </Button>
            <Collapse in={openEdit}>
    */}

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
                        props.setOpen(false)
                        props.editProject(state, props.proj);
                    }}
                >Update</Button>
            </Form>

        </div>
    );
}

export default EditProjectForm;