import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; //Imports the uuid npm package. 
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';


function NewProjectForm(props) {
    //const [open, setOpen] = useState(false);
    const [openNotes, setOpenNotes] = useState(false);
   
  
    return (
      <div >
        <form style={{ border: "1px solid blue" }} >
          <h2>Create new project</h2>
          <label htmlFor="taskBody">Task </label>
          <input
            type="text"
            id="projName"
            name="projName" /*Name must be the same as state value the input is meant to update.*/
           value={props.projData.projName}
            placeholder="New project"
            onChange={props.handleProjChangeFunc}
          />
          <br />
    
            <div>
             
              <br />
              <Button
                onClick={() => setOpenNotes(!openNotes)}
                //aria-controls="example-collapse-text"
                aria-expanded={openNotes}
              >
                Notes
              </Button>
              <br />
              <Collapse in={openNotes}>
                <div>
                  <textarea
                    id="projNotes"
                    name="projNotes"
                    value={props.projData.projNotes}
                    onChange={props.handleProjChangeFunc}
                    rows="4" cols="50"
                  />
                </div>
              </Collapse>
              
                <br />
                <Button
                  disabled={props.projData.projName === "" ? true : false}
                 
                 onClick={(event) => {
                    event.preventDefault();
                    //setOpenNotes(false); //Closes notes section again.
                    props.submitProject({ ...props.projData, projId: uuidv4(), projTodos: []  }); //Handles submission.
                    props.setProjData({ projName: "", projNotes: "" }); //Changes the fields back to blank for a new todo to be input
                   
                  }}
                  
                >Start a new project</Button>
            </div>
       
  
        </form>
      </div>
    );
  }
  
  export default NewProjectForm;