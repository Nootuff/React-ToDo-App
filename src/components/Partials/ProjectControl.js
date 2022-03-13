import React, { useState } from "react";

import DeleteProject from "../Controls/DeleteProject";
import DeleteComplete from "../Controls/DeleteComplete";
import EditProjectForm from "../Forms/EditProjectForm";


import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import ButtonGroup from 'react-bootstrap/ButtonGroup';



function ProjectControl({ proj, viewedProject, setProj, deleteComplete, editProject, deleteProject }) {

   const [open, setOpen] = useState(false);





   return (
      <div className="text-start" style={{ width: "60%", border: "1px solid green", margin: "auto" }}>
         <section style={{ border: "1px solid blue" }}>
            <h2>{viewedProject.projName}</h2>
            <p>{viewedProject.projNotes}</p>
         </section>
       
         {proj !== "3" &&
         <section>
         <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
         >
            Edit Project
         </Button>
         <Collapse in={open}>
            <div style={{ border: "1px solid orange" }}>

               {viewedProject.projId.length > 1 &&
                  <EditProjectForm

                     viewedProject={viewedProject}
                     editProject={editProject}
                     proj={proj}

                  />
               }

               <ButtonGroup vertical>
               {viewedProject.projId.length > 1 &&
                  <DeleteProject
                     viewedProject={viewedProject}
                     setProj={setProj}
                     deleteProject={deleteProject}
                  />
               }
                  <DeleteComplete
                     proj={proj}
                     deleteComplete={deleteComplete}
                  />
               </ButtonGroup>
            </div>
         </Collapse>
         </section>
}
      </div>
   );
}

export default ProjectControl;