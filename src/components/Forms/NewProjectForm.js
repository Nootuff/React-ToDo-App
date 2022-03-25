import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; //Imports the uuid npm package. 
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../../styles/index.css';

function NewProjectForm({ projData, setProjData, handleProjChange, submitProject, setProj, showProjForm, handleFormClose }) {

  const [openNotes, setOpenNotes] = useState(false);

  return (
    <Modal
      className="p-3"
      show={showProjForm}
      onHide={handleFormClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="px-4 py-3 rounded-top background-purple text-white">
        <h2 >Create new project</h2>
      </Modal.Header>
      <Modal.Body className="p-4 rounded-bottom background-grey">
        <Form>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              id="projName"
              name="projName"
              placeholder="Project name"
              maxLength="30"
              value={projData.projName}
              onChange={handleProjChange}
            />
          </Form.Group>
          <Button
            className="mb-2"
            onClick={() => setOpenNotes(!openNotes)}
            aria-expanded={openNotes}
          >
            Notes
          </Button>
          <br />
          <Collapse in={openNotes}>
            <Form.Group className="mb-2">
              <Form.Control
                as="textarea"
                id="projNotes"
                name="projNotes"
                placeholder="Add extra details."
                rows={3}
                value={projData.projNotes}
                onChange={handleProjChange}
              />
            </Form.Group>
          </Collapse>
          <Button
            disabled={projData.projName === "" ? true : false}
            className="mb-2"
            onClick={(event) => {
              const idGen = uuidv4();
              event.preventDefault();
              setOpenNotes(false); //Closes notes section again.
              submitProject({ ...projData, projId: idGen, projTodos: [] }); //Handles submission.
              setProjData({ projName: "", projNotes: "" }); //Changes the fields back to blank for a new todo to be input
              setProj(idGen);
              handleFormClose();
            }}
          >
            Start a new project
          </Button>
          <br />
          <Button
            className="text-wrap"
            variant="danger"
            onClick={() => {
              handleFormClose();
              setOpenNotes(false);
              setProjData({ projName: "", projNotes: "" });
            }}
          >
            Close
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default NewProjectForm;