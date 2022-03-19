import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; //Imports the uuid npm package. 
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import '../../styles/index.css';


function NewProjectForm({ projData, setProjData, handleProjChangeFunc, submitProject, setProj, showProjForm, handleFormClose }) {

  const [openNotes, setOpenNotes] = useState(false);

  return (
    <Modal
   
      show={showProjForm}
      onHide={handleFormClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

{/*<h2 className="ps-3 pe-3 pt-3 pb-2 rounded" style={{backgroundColor: "white"}}>Create new project</h2> Maybe make the background  the same color  as the navbars   */}

<Modal.Body
className="p-3 rounded"
 style={{backgroundColor: "var(--light-grey-color)"}}
>
      <Form  >


      <h2 className="mb-4">Create new project</h2>
       
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            id="projName"
            name="projName"
            placeholder="Project name"
            maxlength="30"
            value={projData.projName}
            onChange={handleProjChangeFunc}
          />
        </Form.Group>
        <Button
          className="mb-2"
          onClick={() => setOpenNotes(!openNotes)}
          //aria-controls="example-collapse-text"
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
              onChange={handleProjChangeFunc}
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