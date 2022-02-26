import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function EditProjectForm(props) {
    const [openEdit, setOpenEdit] = useState(false);

    let values = {
        projId: props.viewedProject.projId,
        projName: props.viewedProject.projName,
        projNotes: props.viewedProject.projNotes,
        projTodos: props.viewedProject.projTodos
    }

    const [state, setState] = useState(values);

    const handleEditChangeFunc = (event) => { //If you can't solve this issue then just leave it. 
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        });
    }

    return (
        <div>
            <Button
                onClick={() => setOpenEdit(!openEdit)}
                aria-controls="example-collapse-text"
                aria-expanded={openEdit}
            >
                Edit Project
            </Button>
            <Collapse in={openEdit}>
                <form>
                    <input
                        type="text"
                        name="projName" /*Name must be the same as state value the input is meant to update.*/
                        id="taskBody"
                        value={state.projName}
                        onChange={handleEditChangeFunc}
                    />
                    <br />
                    <textarea
                        id="projNotes"
                        value={state.projNotes}
                        name="projNotes"
                        onChange={handleEditChangeFunc}
                        rows="4" cols="50"
                    />
                    <br />
                    <Button
                        variant="primary"
                        disabled={state.projName === "" ? true : false}
                        onClick={(event) => {
                            event.preventDefault();
                            setOpenEdit(false);
                            props.editProject(state, props.proj);
                        }}

                       
                    >Update</Button>
                </form>
            </Collapse>
        </div>
    );
}

export default EditProjectForm;