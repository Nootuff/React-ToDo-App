import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DeleteProject from "../Controls/DeleteProject";
import '../../styles/index.css';

function EditProjectForm({ viewedProject, editProject, proj, setOpen, setProj, deleteProject }) {

  let values = {
    projName: viewedProject.projName,
    projNotes: viewedProject.projNotes,
  }

  const [state, setState] = useState("");

  useEffect(() => { //When the viewedProject changes, this form receives its details.
    setState(values);
  }, [viewedProject]);

  const handleEditChangeFunc = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <div className="EditProjectForm p-3 rounded background-grey">
      <Form>
        <Form.Group className="mb-2"  >
          <Form.Label><b>Edit Project Name</b></Form.Label>
          <Form.Control
            type="text"
            name="projName"
            id="projName"
            value={state.projName}
            maxLength="30"
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
        >
          Update
        </Button>
      </Form>
      <DeleteProject
        viewedProject={viewedProject}
        setProj={setProj}
        deleteProject={deleteProject}
      />
    </div>
  );
}

export default EditProjectForm;